import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  {
    path:'produits', component: ProduitsComponent
  },
  {
    path:'new-product', component:NewProductComponent
  },
  {
  path:'', redirectTo:'/produits',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
