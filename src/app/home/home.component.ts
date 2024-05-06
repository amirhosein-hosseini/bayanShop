import { Component , OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ShopItemComponent } from './shop-item/shop-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShopItemComponent , SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    { imageUrl: '../../assets/images/banner.png' },
    { imageUrl: '../../assets/images/banner.png' },
    { imageUrl: '../../assets/images/banner.png' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true
  };

  ngOnInit(): void {
    console.log(this.slides);
  }
}
