import { ComponentFixtureAutoDetect, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { Http, HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
            RouterTestingModule,
            TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'https://ang-2app-kkk6020.c9users.io/assets/translate/i18n', '.json'),
            deps: [Http]
      ],
    });
    TestBed.compileComponents();
  });
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));
  
  it('it should be default language value as English', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit(); 
    console.log(app);
    expect(app.defaultLang).toEqual('lang-en');
  }));
  
  it('it should be equal to an array as Language list array', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit(); 
    
    let languageList = [
      { text: 'English',  value: 'lang-en' },
      { text: 'Français', value: 'lang-fr' },
      { text: 'Deutsche', value: 'lang-gr' } 
    ];
    expect(app.languageList).toEqual(languageList);
  }));

});
