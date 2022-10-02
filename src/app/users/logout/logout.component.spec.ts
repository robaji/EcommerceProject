import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should be able to test variable string 'fortesting1`, () => {
    const fixture = TestBed.createComponent(LogoutComponent);
    const app = fixture.componentInstance;
    expect(app.fortesting1).toEqual('test-successful');
  });

  it(`should be able to test variable string 'fortesting2`, () => {
    const fixture = TestBed.createComponent(LogoutComponent);
    const app = fixture.componentInstance;
    expect(app.fortesting2).toEqual('test-successful');
  });

});
