import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
import { AreaComponent } from './area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { PiegraphComponent } from './piegraph/piegraph.component';
import { dashboardService } from '../../services/admin/dashboardService';


@NgModule({
  declarations: [
    LayoutComponent,
    AreaComponent,
    CardComponent,
    PiegraphComponent,
   
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    HighchartsChartModule,
    MatIconModule
    
  ],
  exports:[LayoutComponent,AreaComponent,CardComponent,PiegraphComponent],
  providers:[dashboardService]
})
export class LayoutModule { }
