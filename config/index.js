/**
 * Config
 *
 * This is the application-wide Configuration class. For simplicity, always use
 * static methods to return any config value;
 *
 */
"use strict";
var Config = (function () {
    function Config() {
    }
    // Build a Firebase URL based on the configured FB_NAME environment variable
    Config.FB_URL = function () {
        if (process.env.FB_NAME) {
            return "https://" + process.env.FB_NAME + ".firebaseio.com";
        }
        else {
            throw new Error('Cannot get Firebase URL. The environment variable \'FB_NAME\' is not set.');
        }
    };
    // The worker queue uses this path to pick up Tasks. 
    // e.g. https://appname.firebaseio.com/path/to/queue/tasks
    Config.FB_TASKPATH = function () {
        return this.FB_QUEUEPATH + "/tasks";
    };
    // Where to add a new Task.
    // e.g. https://appname.firebaseio.com/path/to/queue
    Config.FB_QUEUEPATH = function () {
        return '/queue';
    };
    // Seccret Key provided by Xirsys for STUN/TURN access
    Config.XIRSYS_SECRET = function () {
        return process.env.XIRSYS_SECRET || '';
    };
    Config.FB_PROJECT_ID = function () {
        return process.env.FB_NAME || '';
    };
    Config.FB_CLIENT_EMAIL = function () {
        return process.env.FB_CLIENT_EMAIL || '';
    };
    Config.FB_PRIVATE_KEY = function () {
        var key = process.env.FB_PRIVATE_KEY;
        return (key) ? key.replace(/\\n/g, '\n') : '';
    };
    Config.FB_PRIVATE_KEY_ID = function () {
        return process.env.FB_PRIVATE_KEY_ID || '';
    };
    Config.FB_CLIENT_ID = function () {
        return process.env.FB_CLIENT_ID || '';
    };
    Config.FB_CLIENT_CERT_URL = function () {
        return process.env.FB_CLIENT_CERT_URL || '';
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=index.js.map