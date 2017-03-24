"use strict";
var estimated_entries_component_1 = require('../estimated-entries-page/estimated-entries.component');
var syllabus_details_component_1 = require('../syllabus-details-page/syllabus-details.component');
exports.routes = [
    //{ path: '',   redirectTo: '',  pathMatch: 'full'  },
    //{ path : 'home', component : AppComponent},
    { path: 'estimatedEntries', component: estimated_entries_component_1.EstimatedEntriesComponent, children: [{ path: 'childDetail', component: estimated_entries_component_1.EstimatedEntriesComponent }] },
    { path: 'syllabusDetails', component: syllabus_details_component_1.SyllabusDetailsComponent }];
