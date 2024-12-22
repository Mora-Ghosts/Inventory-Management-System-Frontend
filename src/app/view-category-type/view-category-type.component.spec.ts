import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryTypeComponent } from './view-category-type.component';

describe('ViewTypeComponent', () => {
  let component: ViewCategoryTypeComponent;
  let fixture: ComponentFixture<ViewCategoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCategoryTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
