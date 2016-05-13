System.register(["angular2/core", 'firebase-angular2/core', "./post.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, post_service_1;
    var FirebasePostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            }],
        execute: function() {
            FirebasePostService = (function (_super) {
                __extends(FirebasePostService, _super);
                function FirebasePostService(firebaseService) {
                    /*this.service = firebaseService.child('posts');
                    // Required for derived class*/
                    _super.call(this);
                }
                FirebasePostService.prototype.getPosts = function () {
                    var service = this.service;
                    return service.value.map(function (posts) {
                        return posts.map(function (p, i) {
                            // TODO: Cleanup
                            return {
                                id: p.id,
                                title: p.title,
                                save: function () {
                                    return service.child(i.toString()).setData({
                                        id: this.id,
                                        title: this.title
                                    });
                                }
                            };
                        });
                    });
                };
                FirebasePostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_2.FirebaseService])
                ], FirebasePostService);
                return FirebasePostService;
            }(post_service_1.PostService));
            exports_1("FirebasePostService", FirebasePostService);
        }
    }
});
//# sourceMappingURL=firebase-post.service.js.map