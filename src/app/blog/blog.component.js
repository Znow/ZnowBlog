System.register(['@angular/core', '@angular/router-deprecated', '../post/post.service', '../truncate'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, post_service_1, truncate_1;
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (truncate_1_1) {
                truncate_1 = truncate_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent(postService) {
                    this.postService = postService;
                    this.currentUser = false;
                    console.log(localStorage.getItem('currentUser'));
                    this.currentUser = localStorage.getItem('currentUser');
                }
                BlogComponent.prototype.getPosts = function () {
                    var _this = this;
                    this.postService.getPosts().then(function (posts) { return _this.posts = posts; });
                };
                BlogComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                };
                BlogComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/blog/blog.component.html',
                        pipes: [truncate_1.TruncatePipe],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map