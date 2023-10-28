import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrequentlyaskedComponent } from './frequentlyasked.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:FrequentlyaskedComponent}
    ])
  ]
})
export class FrequentlyaskedModule { }
