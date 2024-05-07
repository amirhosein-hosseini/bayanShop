import { Component } from '@angular/core';
import { ShopItemComponent } from '../home/shop-item/shop-item.component';
import { HeaderService } from '../layout/header/header.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  constructor(private headerService: HeaderService) {
    this.headerService.shouldDisplayHeader = true; // Set shouldDisplayHeader to false for Singlepage component
  }
}
