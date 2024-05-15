import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderService } from '../../layout/header/header.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Import BreakpointObserver and Breakpoints
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-shop',
  standalone: true,
  imports: [CommonModule],
    host: {
    'class': 'no-header'
  },
  templateUrl: './single-shop.component.html',
  styleUrl: './single-shop.component.css'
})
export class SingleShopComponent {


  constructor(public headerService: HeaderService , private breakpointObserver: BreakpointObserver) {
    this.headerService.shouldDisplayHeader = false; // Set shouldDisplayHeader to false for Singlepage component
  }


  activeSize: string = ''; // Property to store the active size
  isMobile: boolean = false;

  setActive(size: string): void {
    this.activeSize = size;
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
