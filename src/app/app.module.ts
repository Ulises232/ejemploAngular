import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './podruct/product-list/product-list.component';
import { ProductoFilterPipe } from './podruct/producto-filter.pipe';

@NgModule({
  declarations: [AppComponent, SumaComponent, RestaComponent, ProductListComponent, ProductoFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
