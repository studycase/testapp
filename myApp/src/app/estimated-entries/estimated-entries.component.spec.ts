import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstimatedEntriesComponent } from './estimated-entries.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { Http, HttpModule } from '@angular/http';
import { EstimatedEntriesService } from './estimated-entries.service';

describe('EstimatedEntriesComponent', () => {
  let component: EstimatedEntriesComponent;
  let fixture: ComponentFixture<EstimatedEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedEntriesComponent ],
      imports: [ 
          RouterTestingModule, 
          TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translate/i18n', '.json'),
            deps: [Http]
      ],
      providers: [EstimatedEntriesService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
