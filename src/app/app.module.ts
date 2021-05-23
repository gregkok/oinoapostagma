import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
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
import { GalleryComponent } from './gallery/gallery.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-service.service';

const appRoutes: Routes = [
  { path: 'menu', component: MenuPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: MainComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
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
    GalleryComponent,
    UserListComponent,
    UserFormComponent,
  ],
  providers: [WindowRefService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
