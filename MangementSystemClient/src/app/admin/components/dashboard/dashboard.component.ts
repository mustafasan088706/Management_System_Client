import { Component, OnInit, ViewChild } from '@angular/core';
import { dashboardService } from '../../../services/adminservices/dashboardService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  image:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image:'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',position: 1, name: 'TestValue1', weight: 1.0079, symbol: 'Dummy'},
  {image:'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg',position: 2, name: 'TestValue2', weight: 4.0026, symbol: 'Dummy'},
  {image:'https://cdn-icons-png.flaticon.com/512/1053/1053244.png',position: 3, name: 'TestValue3', weight: 6.941, symbol: 'Dummy'},
  {image:'https://img.freepik.com/vektoren-premium/kreissymbol-fuer-anonyme-benutzer-vektor-illustration-flache-art-mit-langem-schatten_520826-1931.jpg?w=2000',position: 4, name: 'TestValue4', weight: 9.0122, symbol: 'Dummy'},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg23bqTJ8NSFQ6vjY81zv-2Av8fZY6Zls9gg&usqp=CAU',position: 5, name: 'TestValue5', weight: 10.811, symbol: 'Dummy'},
  {image:'',position: 6, name: 'TestValue6', weight: 12.0107, symbol: 'Dummy'},
  {image:'',position: 7, name: 'TestValue7', weight: 14.0067, symbol: 'Dummy'},
  {image:'',position: 8, name: 'TestValue8', weight: 15.9994, symbol: 'Dummy'},
  {image:'',position: 9, name: 'TestValue9', weight: 18.9984, symbol: 'Dummy'},
  {image:'',position: 10, name: 'TestValue10', weight: 20.1797, symbol: 'Dummy'},
  {image:'',position: 11, name: 'TestValue11', weight: 22.9897, symbol: 'Dummy'},
  {image:'',position: 12, name: 'TestValue12', weight: 24.305, symbol: 'Dummy'},
  {image:'',position: 13, name: 'TestValue13', weight: 26.9815, symbol: 'Dummy'},
  {image:'',position: 14, name: 'TestValue14', weight: 28.0855, symbol: 'Dummy'},
  {image:'',position: 15, name: 'TestValue15', weight: 30.9738, symbol: 'Dummy'},
 
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


   bigChart : any[] = [];
   cards : any[] = [];
   cards2 : any[] = [];
   cards3 : any[] = [];
   cards4 : any[] = [];
   pie:any[]=[];
  
   
   displayedColumns: string[] = ['image','position', 'name', 'weight', 'symbol'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  
  constructor(private dashboardService:dashboardService){}

  ngOnInit() {
    this.bigChart=this.dashboardService.bigChart();
    this.cards=this.dashboardService.cards();
    this.cards2=this.dashboardService.cards2();
    this.cards3=this.dashboardService.cards3();
    this.cards4=this.dashboardService.cards4();
    this.pie=this.dashboardService.pie();
    this.dataSource.paginator = this.paginator;

  }

}
