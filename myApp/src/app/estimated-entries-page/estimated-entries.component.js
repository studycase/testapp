"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/**
 * The Estimated Entries
 *
 * The component provides list of estimated entries.
 */
var EstimatedEntriesComponent = (function () {
    /**
     * The "constructor"
     *
     * @param {EstimatedEntriesService} estimatedEntriesService gets entries
     */
    function EstimatedEntriesComponent(estimatedEntriesService) {
        this.estimatedEntriesService = estimatedEntriesService;
        /**
         * Entries Array
         */
        this.entries = [];
    }
    EstimatedEntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estimatedEntriesService.getEntries().subscribe(function (data) {
            _this.entries = data.data.estimated_entries;
        });
    };
    EstimatedEntriesComponent = __decorate([
        core_1.Component({
            selector: 'app-estimated-entries-page',
            templateUrl: 'estimated-entries.component.html',
            styleUrls: ['estimated-entries.component.scss']
        })
    ], EstimatedEntriesComponent);
    return EstimatedEntriesComponent;
}());
exports.EstimatedEntriesComponent = EstimatedEntriesComponent;
