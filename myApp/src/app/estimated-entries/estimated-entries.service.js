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
//import { Entries } from 'estimated-entries.model';
var EstimatedEntriesService = (function () {
    function EstimatedEntriesService(http) {
        this.http = http;
    }
    EstimatedEntriesService.prototype.getEntries = function () {
        return this.http.get('mock/estimated_entries.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    EstimatedEntriesService = __decorate([
        core_1.Injectable()
    ], EstimatedEntriesService);
    return EstimatedEntriesService;
}());
exports.EstimatedEntriesService = EstimatedEntriesService;
