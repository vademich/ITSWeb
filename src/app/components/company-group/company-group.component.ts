import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-group',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './company-group.component.html',
  styleUrl: './company-group.component.css'
})
export class CompanyGroupComponent {

}
