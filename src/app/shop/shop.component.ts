import { Component } from '@angular/core';
import { ShopItemComponent } from '../home/shop-item/shop-item.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
