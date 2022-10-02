import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ FormsModule, HttpClientModule],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have boughtBooks as empty array`, () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.componentInstance;
    expect(app.boughtBooks).toEqual([]);
  });

  it(`should have accountId as 'Account ID: `, () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const app = fixture.componentInstance;
    expect(app.accountId).toEqual('Account ID: null');
  });
});
