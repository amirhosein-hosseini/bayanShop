import { Component } from '@angular/core';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'app-single-shop',
  standalone: true,
  imports: [],
    host: {
    'class': 'no-header'
  },
  templateUrl: './single-shop.component.html',
  styleUrl: './single-shop.component.css'
})
export class SingleShopComponent {


  constructor(public headerService: HeaderService) {
    this.headerService.shouldDisplayHeader = false; // Set shouldDisplayHeader to false for Singlepage component
  }


  activeSize: string = ''; // Property to store the active size

  setActive(size: string): void {
    this.activeSize = size;
  }
}
