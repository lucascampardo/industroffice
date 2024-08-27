import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { LoginComponent } from './pages/login/login.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MainComponent, HomeComponent, AboutComponent, CursosComponent, LoginComponent, FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'industroffice';
}
