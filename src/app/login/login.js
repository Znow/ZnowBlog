System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Login;
    return {
        setters:[],
        execute: function() {
            Login = (function () {
                function Login(email, password) {
                    this.email = email;
                    this.password = password;
                }
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=login.js.map