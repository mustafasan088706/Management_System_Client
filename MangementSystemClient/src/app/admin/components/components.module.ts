import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndOfProductionComponent } from './end-of-production/end-of-production.component';
import { EndOfProductionModule } from './end-of-production/end-of-production.module';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';
import{MatDividerModule} from'@angular/material/divider';





@NgModule({
  declarations: [
    EndOfProductionComponent,
    
  ],
  imports: [
    CommonModule,
    EndOfProductionModule,
    ProductsModule,
    DashboardModule,
    MatDividerModule,
  

  ]
})
export class ComponentsModule { }
