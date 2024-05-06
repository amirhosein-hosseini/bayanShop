import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent , HeaderComponent,FooterComponent , SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bayan';
}
