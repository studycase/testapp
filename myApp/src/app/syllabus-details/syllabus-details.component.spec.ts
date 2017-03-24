import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SyllabusDetailsComponent } from './syllabus-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader} from "ng2-translate";
import { Http, HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SyllabusDetailsService } from './syllabus-details.service';

describe('SyllabusDetailsComponent', () => {
  let component: SyllabusDetailsComponent;
  let fixture: ComponentFixture<SyllabusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusDetailsComponent ],
        imports: [ 
          RouterTestingModule, 
          NgbModule.forRoot(),
          TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translate/i18n', '.json'),
            deps: [Http]
        ],
        providers: [SyllabusDetailsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
