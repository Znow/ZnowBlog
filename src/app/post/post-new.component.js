System.register(['@angular/core', '@angular/router-deprecated', './post.service', './post', '../storage/localStorageService', '../conversion/markdownConverter'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_deprecated_1, post_service_1, post_1, localStorageService_1, markdownConverter_1;
    var PostNewComponent;
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
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (localStorageService_1_1) {
                localStorageService_1 = localStorageService_1_1;
            },
            function (markdownConverter_1_1) {
                markdownConverter_1 = markdownConverter_1_1;
            }],
        execute: function() {
            PostNewComponent = (function () {
                function PostNewComponent(postService, converter, storage, _router) {
                    this.postService = postService;
                    this.converter = converter;
                    this.storage = storage;
                    this._router = _router;
                    this.model = new post_1.Post(20, '', '', '');
                    this.submitted = false;
                    this.firebase = new Firebase("https://znow.firebaseio.com");
                    this.html = '';
                    this.storageKey = 'markdown-app';
                    var text = this.storage.retrieve(this.storageKey);
                    this.initVal = text ? text.text : '';
                    this.updateValue(this.initVal);
                }
                PostNewComponent.prototype.onSubmit = function () {
                    console.log();
                    this.postService.addPost(this.model.title, this.model.content);
                    this.submitted = true;
                };
                PostNewComponent.prototype.updateValue = function (val) {
                    this.storage.store(this.storageKey, { text: val });
                    this.html = this.converter.convert(val);
                };
                PostNewComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/post/post-form.component.html',
                        bindings: [markdownConverter_1.MarkdownConverter, localStorageService_1.LocalStoragePersistence]
                    }),
                    __param(1, core_1.Inject(markdownConverter_1.MarkdownConverter)),
                    __param(2, core_1.Inject(localStorageService_1.LocalStoragePersistence)), 
                    __metadata('design:paramtypes', [post_service_1.PostService, Object, Object, router_deprecated_1.Router])
                ], PostNewComponent);
                return PostNewComponent;
            }());
            exports_1("PostNewComponent", PostNewComponent);
        }
    }
});
//# sourceMappingURL=post-new.component.js.map