/**
 * Call.ts
 *
 * A Call model.
 *
 */
"use strict";
(function (CALL_ROLE) {
    CALL_ROLE[CALL_ROLE["caller"] = 0] = "caller";
    CALL_ROLE[CALL_ROLE["callee"] = 1] = "callee";
})(exports.CALL_ROLE || (exports.CALL_ROLE = {}));
var CALL_ROLE = exports.CALL_ROLE;
var Call = (function () {
    function Call(userId, data) {
        this.userId = userId;
        this.role = data.role || CALL_ROLE.caller;
        this.accepted = (data.role === CALL_ROLE.caller);
        this.cancelled = data.cancelled || false;
        this.busy = data.busy || true;
        this.connection = data.connection || null;
        this.timestamp = ''; // firebase.database.ServerValue.TIMESTAMP;
    }
    return Call;
}());
exports.Call = Call;
//# sourceMappingURL=Call.js.map