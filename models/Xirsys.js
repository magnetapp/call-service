"use strict";
var XirsysModel = (function () {
    function XirsysModel(options) {
        this.ident = options.ident || 'magnetadmin';
        this.secret = options.secret || '';
        this.domain = options.domain || 'www.magnet.host';
        this.room = options.room || 'test';
        this.application = options.application || 'test';
        this.secure = options.secure || 0;
    }
    return XirsysModel;
}());
exports.XirsysModel = XirsysModel;
//# sourceMappingURL=Xirsys.js.map