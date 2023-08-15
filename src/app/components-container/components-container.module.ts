import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsContainerRoutingModule } from './components-container-routing.module';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ProductsComponent, AboutComponent, LoginComponent, ContactComponent],
  imports: [
    CommonModule,
    ComponentsContainerRoutingModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class ComponentsContainerModule { }
