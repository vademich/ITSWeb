import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-truck',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './truck.component.html',
  styleUrl: './truck.component.css'
})
export class TruckComponent {
  title="truck";

}
