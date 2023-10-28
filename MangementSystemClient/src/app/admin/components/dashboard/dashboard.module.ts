import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import { LayoutModule } from '../../layout/layout.module';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:DashboardComponent}
    ]),
MatDividerModule,
FlexLayoutModule,
MatCardModule,
LayoutModule,
MatPaginatorModule,
MatTableModule,

  ]
})
export class DashboardModule { }
