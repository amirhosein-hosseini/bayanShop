import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {
  @Input() slides: any[] = [];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    $(this.elementRef.nativeElement).find('.slider').slick({
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Autoplay speed in milliseconds
      dots: true
    });
  }
}