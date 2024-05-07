import { Component } from '@angular/core';
import { ShopItemComponent } from '../home/shop-item/shop-item.component';
import { HeaderService } from '../layout/header/header.service';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopItemComponent , SliderComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  slides = [
    { 
      imageUrl: '../../assets/images/banner.png', 
    },
    { 
      imageUrl: '../../assets/images/banner.png', 
    }
  ];


  constructor(private headerService: HeaderService) {
    this.headerService.shouldDisplayHeader = true; // Set shouldDisplayHeader to false for Singlepage component
  }
}
