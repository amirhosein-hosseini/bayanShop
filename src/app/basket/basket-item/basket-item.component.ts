import { Component } from '@angular/core';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  number: number=1;

  incrementNumber() {
    this.number += 1;
  }  
  decrementNumber() {
    if(this.number > 0) {
      this.number -= 1;
    }
  }
}
