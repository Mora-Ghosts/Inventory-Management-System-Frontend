import { Component } from '@angular/core';
import { StockValueComponent } from '../stock-value/stock-value.component';


@Component({
  selector: 'app-hero',
  imports: [StockValueComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
