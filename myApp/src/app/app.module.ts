import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Import app-routes */
import { routes } from './app-routes/app-routes.config';

/* Import component dependencies */
import { AppComponent } from './app.component';
import { EstimatedEntriesComponent } from './estimated-entries-page/estimated-entries.component';
import { SyllabusDetailsComponent } from './syllabus-details-page/syllabus-details.component';

/* Import service dependencies */
import { EstimatedEntriesService } from './estimated-entries-page/estimated-entries.service';
import { SyllabusDetailsService } from './syllabus-details-page/syllabus-details.service';

@NgModule({
  declarations: [
    AppComponent,
    EstimatedEntriesComponent,
    SyllabusDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ], 
  providers: [EstimatedEntriesService,SyllabusDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
