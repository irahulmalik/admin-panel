import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Home } from './components/home/home.components';
import { Login } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'home', component: Home },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
