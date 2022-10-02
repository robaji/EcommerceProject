import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [ FormsModule, HttpClientModule],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have cartBooks as empty array`, () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    const app = fixture.componentInstance;
    expect(app.cartBooks).toEqual([]);
  });

  it(`should have customer hello show as Hello, null null!`, () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    const app = fixture.componentInstance;
    expect(app.customerHello).toEqual('Hello, null null!');
  });
});
