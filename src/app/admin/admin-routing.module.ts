import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'products',
            component: AdminProductsComponent
          },
          {
            path: 'categories',
            component: AdminCategoriesComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
