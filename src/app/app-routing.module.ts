import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductListComponent } from './podruct/product-list/product-list.component';
import { SumaComponent } from './calculos/suma/suma.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'suma', component: SumaComponent },
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
