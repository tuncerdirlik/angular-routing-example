import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule({
  declarations: [
    AdminProductsComponent, 
    AdminCategoriesComponent, 
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AdminModule { }
