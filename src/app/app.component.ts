import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainComponent } from './components/main/main.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TruckComponent } from './components/truck/truck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    HeaderComponentComponent,
    MainComponent,
    EmployeeComponent, 
    TruckComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../fonts/fonts.css']
})
export class AppComponent {
  title = 'ITSWeb';
  image1 = '../assets/images/people/gerbert.png';
  employeeName1 = 'Герберт Ромберг';
  employeeJob1 = 'Основатель компании';

  employeeName2 = 'Дмитрий Рыков';
  employeeJob2 = 'Руководитель IT отдела';

  employeeName3 = 'Вадим Гончаров';
  employeeJob3 = 'Frontend developer';
  image3 = '../assets/images/people/vadim.jpeg';
}
