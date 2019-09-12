import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstImageComponent } from './first-image/first-image.component';
import { SecondImageComponent } from './second-image/second-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstImageComponent,
    SecondImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
