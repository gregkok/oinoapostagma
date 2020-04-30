import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { MenuPageComponent } from './menu-page/menu-page.component';
import { AboutComponent } from './about/about.component';
import { LoadingLandingComponent } from './loading-landing/loading-landing.component';
import { WindowRefService } from './service/window-ref.service';
// import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path: 'menu', component: MenuPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // })
  ],
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
    MenuPageComponent,
    AboutComponent,
    LoadingLandingComponent,
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
