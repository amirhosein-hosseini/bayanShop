import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; // Import BreakpointObserver and Breakpoints


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public headerService: HeaderService, private breakpointObserver: BreakpointObserver) { }

  isMobile: boolean = false;

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Small
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
