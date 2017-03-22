import { ComponentFixtureAutoDetect, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from "ng2-translate";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule ],
      providers: [{provide: TranslateService}],
    });
    TestBed.compileComponents();
  });
  //426942

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log(fixture); 
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  }));

});
