import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksHttpComponent } from './list-books-http.component';

describe('ListBooksHttpComponent', () => {
  let component: ListBooksHttpComponent;
  let fixture: ComponentFixture<ListBooksHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBooksHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooksHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
