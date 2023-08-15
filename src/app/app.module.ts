import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ComponentsContainerModule} from './components-container/components-container.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
