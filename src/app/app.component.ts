import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainComponent } from './components/main/main.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { TruckComponent } from './components/truck/truck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    HeaderComponentComponent,
    MainComponent,
    OurTeamComponent,
    TruckComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../fonts/fonts.css']
})
export class AppComponent {
  title = 'ITSWeb';
}
