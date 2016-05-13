System.register(['@angular/core', '@angular/router-deprecated', './login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, login_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router) {
                    this._router = _router;
                    this.currentUser = false;
                    this.submitted = false;
                    this.loginModel = new login_1.Login("", "");
                    this.firebase = new Firebase("https://znow.firebaseio.com");
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.currentUser = localStorage.getItem("currentUser");
                };
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var email = this.loginModel.email;
                    var password = this.loginModel.password;
                    var credentials = {
                        email: email,
                        password: password
                    };
                    this.firebase.authWithPassword(credentials, function (error, authData) {
                        if (error) {
                            console.log(error);
                        }
                        console.log(authData);
                        localStorage.setItem('authToken', authData.token);
                        localStorage.setItem('currentUser', 'true');
                        _this.currentUser = true;
                        _this.submitted = true;
                    });
                };
                LoginComponent.prototype.gotoNewPost = function () {
                    this._router.navigate(['PostNew']);
                };
                LoginComponent.prototype.logOut = function () {
                    this.firebase.unauth();
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('currentUser');
                    this.currentUser = false;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: './app/login/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map