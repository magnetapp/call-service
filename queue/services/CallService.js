/**
 * CallService.ts
 *
 * A service to make calls
 */
"use strict";
var config_1 = require('./../../config');
var Xirsys_1 = require('./../../models/Xirsys');
var FirebaseService_1 = require('./FirebaseService');
var https = require('https');
// Methods?
// ...
// setup
// make
var CallService = (function () {
    function CallService(callerId, calleeId) {
        var fbs = new FirebaseService_1.FirebaseService();
        this.$fb = fbs.get();
        this.callerId = callerId;
        this.calleeId = calleeId;
    }
    // Set-up a call between two parties by fetching the necessary data from our STUN/TURN server
    CallService.prototype.setup = function () {
        var requestData = new Xirsys_1.XirsysModel({
            secret: config_1.Config.XIRSYS_SECRET(),
            secure: 1
        });
        var requestDataStr = JSON.stringify(requestData);
        var options = {
            hostname: 'service.xirsys.com',
            path: '/ice',
            method: 'POST',
            headers: {
                'Content-Length': Buffer.byteLength(requestDataStr)
            }
        };
        return new Promise(function (resolve, reject) {
            var response = '';
            var req = https.request(options, function (res) {
                // As the repsonse streams-in, add it chunk-by-chunk
                res.on('data', function (chunk) {
                    response += chunk;
                });
                // When the responsee finishes, return the parsed object
                res.on('end', function () { return resolve(JSON.parse(response)); });
            });
            // Write the request data
            req.write(requestDataStr);
            // End the request
            req.end();
            // If there is an error
            req.on('error', function (e) {
                console.error(e);
                reject(e);
            });
        });
    };
    // Create a call 
    CallService.prototype.make = function (callData) {
        var _this = this;
        console.log('Data from Xirsys:', callData);
        return new Promise(function (resolve, reject) {
            var $db = _this.$fb.database();
            var $ref = $db.ref('calls/test');
            return $ref.set(callData).then(resolve).catch(reject);
        });
    };
    return CallService;
}());
exports.CallService = CallService;
//# sourceMappingURL=CallService.js.map