import { Component } from '@angular/core';
import { ShopItemComponent } from './shop-item/shop-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShopItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
