System.register(['@angular/core', './post'], function(exports_1, context_1) {
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
    var core_1, post_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService() {
                    this.firebase = new Firebase("https://znow.firebaseio.com/posts");
                }
                PostService.prototype.addPost = function (title, content) {
                    /*var getLastId = POSTS[POSTS.length - 1].id;
                    var post = <Post>{ id: getLastId + 1, title: title, content: content, created_at: "February 24, 2016" }
                
                    POSTS.push(post);*/
                    var posts = this.firebase.child("posts");
                    posts.push(new post_1.Post(1, title, content, Date.now().toString()), function (error) {
                        if (error) {
                            console.error('ERROR @ createPost :', error);
                        }
                        console.log("hej");
                    });
                };
                PostService.prototype.getPosts = function () {
                    var POSTS = [];
                    this.firebase.on("value", function (snapshot) {
                        snapshot.forEach(function (childSnapshot) {
                            var child = childSnapshot.val();
                            var date = new Date(child.created_at * 1000);
                            var newDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
                            var post = new post_1.Post(child.id, child.title, child.content, newDate);
                            POSTS.push(post);
                        });
                    });
                    //return this.firebase.child('posts');
                    return Promise.resolve(POSTS);
                    //return POSTS;
                };
                PostService.prototype.getPost = function (id) {
                    //return this.getPosts().then(posts => posts.filter(p => p.id === +id)[0]);
                    //return POSTS.filter(p => p.id === +id)[0];
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map