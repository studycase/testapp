import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewAppComponent } from './my-new-app.component';

describe('MyNewAppComponent', () => {
  let component: MyNewAppComponent;
  let fixture: ComponentFixture<MyNewAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
