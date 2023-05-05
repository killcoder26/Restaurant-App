import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { DishComponent } from './pages/dish/dish.component';
import { DishListComponent } from './pages/dish-list/dish-list.component';
import { CreateDishComponent } from './components/create-dish/create-dish.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditDishComponent } from './components/edit-dish/edit-dish.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dish", component: DishListComponent },
  { path: "dish/:catName", component: DishComponent },
  { path: "category", component: CategoryListComponent },
  { path: "category/:menuName", component: CategoryComponent },
  { path: "createdish", component: CreateDishComponent },
  { path: "createmenu", component: CreateMenuComponent },
  { path: "createcategory", component: CreateCategoryComponent },
  { path: "editDish/:id", component: EditDishComponent },
  { path: "editCategory/:id", component: EditCategoryComponent },
  { path: "editMenu/:id", component: EditMenuComponent },
  { path: "contact", component: ContactUsComponent },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "**", component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
