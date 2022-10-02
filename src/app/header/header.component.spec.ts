import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should be able to test variable string 'fortesting1`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.fortesting1).toEqual('test-successful');
  });

  it(`should be able to test variable string 'fortesting2`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app.fortesting2).toEqual('test-successful');
  });

});
