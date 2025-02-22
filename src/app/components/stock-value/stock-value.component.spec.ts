import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockValueComponent } from './stock-value.component';

describe('StockValueComponent', () => {
  let component: StockValueComponent;
  let fixture: ComponentFixture<StockValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
