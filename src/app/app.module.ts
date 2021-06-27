import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductsComponent } from "./components/products/products.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { ProductComponent } from "./components/products/product/product.component";
import { UserComponent } from "./components/users/user/user.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminModule } from "./admin/admin.module";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    CategoriesComponent,
    NotfoundComponent,
    ProductComponent,
    UserComponent,
    EditProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
