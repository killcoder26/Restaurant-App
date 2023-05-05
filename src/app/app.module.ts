import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { DishComponent } from './pages/dish/dish.component';
import { DishListComponent } from './pages/dish-list/dish-list.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import { EditDishComponent } from './components/edit-dish/edit-dish.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingInterceptor } from './loading.interceptor';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CategoryListComponent,
    CategoryComponent,
    DishComponent,
    DishListComponent,
    CreateCategoryComponent,
    CreateMenuComponent,
    CreateDishComponent,
    EditDishComponent,
    EditMenuComponent,
    EditCategoryComponent,
    ContactUsComponent,
    MainComponent,
    SearchPipe,
    CartComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    [LottieModule.forRoot({ player: playerFactory })],
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
