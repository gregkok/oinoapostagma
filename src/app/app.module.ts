import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstImageComponent } from './main/first-image/first-image.component';
import { SecondImageComponent } from './main/second-image/second-image.component';
import { MainComponent } from './main/main.component';
import { LocationComponent } from './main/location/location.component';
import { MapComponent } from './main/map/map.component';
import { IngredientsComponent } from './main/ingredients/ingredients.component';
import { IngredientGridComponent } from './main/ingredient-grid/ingredient-grid.component';
import { SocialComponent } from './main/social/social.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstImageComponent,
    SecondImageComponent,
    MainComponent,
    LocationComponent,
    MapComponent,
    IngredientsComponent,
    IngredientGridComponent,
    SocialComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
