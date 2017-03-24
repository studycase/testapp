"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SyllabusDetailsComponent = (function () {
    function SyllabusDetailsComponent(syllabusDetailsService) {
        this.syllabusDetailsService = syllabusDetailsService;
        this.syllabus_details = [];
        this.syllabus_pdf = [];
    }
    SyllabusDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.syllabusDetailsService.getSyllabus().subscribe(function (data) {
            _this.syllabus_details = data.data.syllabus_details;
            _this.syllabus_entries = data.data.syllabus_entries;
        });
        this.syllabusDetailsService.getSyllabusPDF().subscribe(function (data) {
            _this.syllabus_pdf = data.data.syllabus_pdf;
        });
        this.syllabusDetailsService.getReleaseMaterial().subscribe(function (data) {
            _this.syllabus_release_material = data.data.release_material;
        });
    };
    SyllabusDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-syllabus-details',
            templateUrl: 'syllabus-details.component.html',
            styleUrls: ['syllabus-details.component.scss']
        })
    ], SyllabusDetailsComponent);
    return SyllabusDetailsComponent;
}());
exports.SyllabusDetailsComponent = SyllabusDetailsComponent;
