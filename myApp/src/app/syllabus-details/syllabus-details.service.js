"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var SyllabusDetailsService = (function () {
    function SyllabusDetailsService(http) {
        this.http = http;
    }
    SyllabusDetailsService.prototype.getSyllabus = function () {
        return this.http.get('mock/syllabus_details.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SyllabusDetailsService.prototype.getSyllabusPDF = function () {
        return this.http.get('mock/syllabus_moredetail.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SyllabusDetailsService.prototype.getReleaseMaterial = function () {
        return this.http.get('mock/syllabus_release_material.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SyllabusDetailsService = __decorate([
        core_1.Injectable()
    ], SyllabusDetailsService);
    return SyllabusDetailsService;
}());
exports.SyllabusDetailsService = SyllabusDetailsService;
