import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { ProductComponent } from "./components/products/product/product.component";
import { ProductsComponent } from "./components/products/products.component";
import { UserComponent } from "./components/users/user/user.component";
import { UsersComponent } from "./components/users/users.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    {
      path: "products",
      component: ProductsComponent,
      children: [
        { path: ":id", component: ProductComponent },
        { path: ":id/edit", component: EditProductComponent },
      ],
    },
  
    {
      path: "users",
      component: UsersComponent,
      children: [{ path: ":name", component: UserComponent }],
    },
  
    { path: "**", component: NotfoundComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
      
}
