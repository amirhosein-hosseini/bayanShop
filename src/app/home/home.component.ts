import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HeaderService } from '../layout/header/header.service';
import { SliderComponent } from '../slider/slider.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Import BreakpointObserver and Breakpoints


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShopItemComponent , SliderComponent , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private headerService: HeaderService , private breakpointObserver: BreakpointObserver) {
    this.headerService.shouldDisplayHeader = true; // Set shouldDisplayHeader to false for Singlepage component
    
  }
  

  hideSideMenu = false;
  isMobile: boolean = false;


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

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
