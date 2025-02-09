import { Component } from '@angular/core';
import {ProductType} from '../../interfaces/product-type';
import {ProductTypeService} from '../../services/product-type-service.service';
import {FormsModule} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-view-product-type',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './view-product-type.component.html',
  styleUrl: './view-product-type.component.css'
})
export class ViewProductTypeComponent {
  productTypes: ProductType[] = [];
  isEditing = false;
  editableProductType: ProductType = {
    categoryId: null,
    brand: "",
    model: "",
    color: "",
  };

  constructor(private productTypeService: ProductTypeService) {}

  ngOnInit(): void {
    this.loadProductTypes();
  }

  loadProductTypes(): void {
    this.productTypeService.getAllProductTypes().subscribe({
      next: (data) => (this.productTypes = data),
      error: (err) => console.error('Error fetching product types', err)
    });
  }

  onEdit(productType: ProductType): void {
    this.isEditing = true;
    this.editableProductType = { ...productType }; // Clone to avoid direct mutation
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editableProductType = {
      categoryId: null,
      brand: "",
      model: "",
      color: "",
    };
  }

  onUpdate(): void {
    if (this.editableProductType) {
      this.productTypeService.updateProductType(this.editableProductType).subscribe({
        next: () => {
          this.isEditing = false;
          this.loadProductTypes();
        },
        error: (err) => console.error('Error updating product type', err)
      });
    }
  }

  onDelete(productId: number | undefined): void {
    if(productId!=undefined){
      if (confirm('Are you sure you want to delete this product type?')) {
        this.productTypeService.deleteProductType(productId).subscribe({
          next: () => this.loadProductTypes(),
          error: (err) => console.error('Error deleting product type', err)
        });
      }
    }
  }
}
