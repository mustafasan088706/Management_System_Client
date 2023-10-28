import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {FlexLayoutModule} from '@angular/flex-layout'
import{MatMenuModule} from '@angular/material/menu'
import{MatListModule} from '@angular/material/list';







@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule

    
  ],
  exports:[HeaderComponent,SidebarComponent,FooterComponent]
})
export class ComponentsModule { }
