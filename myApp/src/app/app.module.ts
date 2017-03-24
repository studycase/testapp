import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

/* boostrap 4 */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* lang i18n */
import { TranslateModule, TranslateLoader } from 'ng2-translate';
import { createTranslateLoader } from './shared/translate/translate.component';

/* Import app-routes */
import { routes } from './app-routes/app-routes.config';

/* Import component dependencies */
import { AppComponent } from './app.component';
import { EstimatedEntriesComponent } from './estimated-entries-page/estimated-entries.component';
import { SyllabusDetailsComponent } from './syllabus-details-page/syllabus-details.component';

/* Import service dependencies */
import { EstimatedEntriesService } from './estimated-entries-page/estimated-entries.service';
import { SyllabusDetailsService } from './syllabus-details-page/syllabus-details.service';
import { TestoComponent } from './testo/testo.component';


@NgModule({
  declarations: [
    AppComponent,
    EstimatedEntriesComponent,
    SyllabusDetailsComponent,
    TestoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
    })
  ], 
  providers: [EstimatedEntriesService,SyllabusDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
