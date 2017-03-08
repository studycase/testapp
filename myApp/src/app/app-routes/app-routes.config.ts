import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { EstimatedEntriesComponent } from '../estimated-entries-page/estimated-entries.component';
import { SyllabusDetailsComponent } from '../syllabus-details-page/syllabus-details.component';

export const routes: Routes = [
    //{ path: '',   redirectTo: '',  pathMatch: 'full'  },
    //{ path : '', component : AppComponent}, 
    { path : 'estimatedEntries', component : EstimatedEntriesComponent},
    { path : 'syllabusDetails', component : SyllabusDetailsComponent}
];