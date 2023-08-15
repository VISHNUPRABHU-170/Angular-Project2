import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import {canActivateGuard} from './Route-Guards/can-activate.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [canActivateGuard]},
  {path: 'about', component: AboutComponent, canActivate: [canActivateGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [canActivateGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductsComponent, canActivate: [canActivateGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsContainerRoutingModule { }
