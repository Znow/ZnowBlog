System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ArchiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArchiveComponent = (function () {
                function ArchiveComponent() {
                    this.archives = [
                        'Januar 2016',
                        'Februar 2016',
                        'Marts 2016'
                    ];
                }
                ArchiveComponent = __decorate([
                    core_1.Component({
                        template: "\n  <ol class=\"list-unstyled\">\n    <li *ngFor=\"#archive of archives\"><a href=\"#\">{{archive}}</a></li>\n  </ol>\n  <!--<ol class=\"list-unstyled\">\n    <li><a href=\"#\">March 2014</a></li>\n    <li><a href=\"#\">February 2014</a></li>\n    <li><a href=\"#\">January 2014</a></li>\n    <li><a href=\"#\">December 2013</a></li>\n    <li><a href=\"#\">November 2013</a></li>\n    <li><a href=\"#\">October 2013</a></li>\n    <li><a href=\"#\">September 2013</a></li>\n    <li><a href=\"#\">August 2013</a></li>\n    <li><a href=\"#\">July 2013</a></li>\n    <li><a href=\"#\">June 2013</a></li>\n    <li><a href=\"#\">May 2013</a></li>\n    <li><a href=\"#\">April 2013</a></li>\n  </ol>-->\n  ",
                        selector: 'archive'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArchiveComponent);
                return ArchiveComponent;
            }());
            exports_1("ArchiveComponent", ArchiveComponent);
        }
    }
});
//# sourceMappingURL=archive.component.js.map