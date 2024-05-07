import { Component , OnInit } from '@angular/core';
import { HeaderService } from '../layout/header/header.service';
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

  constructor(private headerService: HeaderService) {
    this.headerService.shouldDisplayHeader = true; // Set shouldDisplayHeader to false for Singlepage component
  }


  slides = [
    { 
      imageUrl: '../../assets/images/banner.png', 
    },
    { 
      imageUrl: '../../assets/images/banner.png', 
    }
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
