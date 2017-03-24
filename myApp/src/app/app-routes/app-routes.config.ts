import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { EstimatedEntriesComponent } from '../estimated-entries-page/estimated-entries.component';
import { SyllabusDetailsComponent } from '../syllabus-details-page/syllabus-details.component';
import { TestoComponent } from '../testo/testo.component';


export const routes: Routes = [
    //{ path: '',   redirectTo: '',  pathMatch: 'full'  },
    //{ path : 'home', component : AppComponent},
    { path : 'estimatedEntries', 
        children:[
                { path : '', component : EstimatedEntriesComponent }, 
                { path : 'childDetail', component : TestoComponent }
            ]
    },
    { path : 'syllabusDetails', component : SyllabusDetailsComponent }];