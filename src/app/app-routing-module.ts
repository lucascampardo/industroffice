import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

const routes: Routes = [
  { path: 'src/app/pages/login', component: LoginComponent },
  { path: 'src/app/pages/signup', component: SignupComponent },
  { path: 'src/app/pages/about', component: AboutComponent },
  { path: 'src/app/pages/cursos', component: CursosComponent },
  { path: 'src/app/pages/feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
