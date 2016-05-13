System.register(['@angular/core', './post.service', '@angular/router-deprecated', './post-edit.component'], function(exports_1, context_1) {
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
    var core_1, post_service_1, router_deprecated_1, post_edit_component_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (post_edit_component_1_1) {
                post_edit_component_1 = post_edit_component_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(_postService, _router, _routeParams) {
                    this._postService = _postService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                PostComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get('id');
                    //this._service.getPost(id).then(post => this.post = post);
                    //this._postService.getPost(id).then(post => this.post = post);
                };
                PostComponent.prototype.gotoBlog = function () {
                    //let postId = this.post ? this.post.id : null;
                    this._router.navigate(['Blog']);
                };
                PostComponent.prototype.editPost = function (post) {
                    this.editingPost = post;
                };
                PostComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/post/post.component.html',
                        providers: [post_service_1.PostService],
                        directives: [post_edit_component_1.PostEditComponent]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map