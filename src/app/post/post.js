System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Post;
    return {
        setters:[],
        execute: function() {
            Post = (function () {
                function Post(id, title, content, created_at) {
                    this.id = id;
                    this.title = title;
                    this.content = content;
                    this.created_at = created_at;
                }
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=post.js.map