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
    { 
      imageUrl: '../../assets/images/bookcategory.png', 
      title: 'Slide 1', 
      description: 'Description for slide 1' 
    },
    { 
      imageUrl: '../../assets/images/bookcategory.png', 
      title: 'Slide 2', 
      description: 'Description for slide 2' 
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
