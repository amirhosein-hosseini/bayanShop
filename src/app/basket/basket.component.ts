import { Component } from '@angular/core';
import { BasketItemComponent } from './basket-item/basket-item.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [BasketItemComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

}
