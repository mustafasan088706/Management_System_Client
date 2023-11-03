import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EndOfProductionComponent } from './end-of-production.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:EndOfProductionComponent}
    ])
  ]
})
export class EndOfProductionModule { }
