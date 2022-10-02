import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ListBooksHttpComponent } from './list-books-http.component';

describe('ListBooksHttpComponent', () => {
  let component: ListBooksHttpComponent;
  let fixture: ComponentFixture<ListBooksHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksHttpComponent ],
      imports: [ FormsModule, HttpClientModule],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooksHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have allBooks as empty array`, () => {
    const fixture = TestBed.createComponent(ListBooksHttpComponent);
    const app = fixture.componentInstance;
    expect(app.allBooks).toEqual([]);
  });

  it(`should have customer hello show as Hello, null null!`, () => {
    const fixture = TestBed.createComponent(ListBooksHttpComponent);
    const app = fixture.componentInstance;
    expect(app.customerHello).toEqual('Hello, null null!');
  });


});
