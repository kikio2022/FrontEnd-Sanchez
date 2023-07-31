import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit{
botones:any;

constructor(private datosPortfolio:PortfolioService){}

ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.botones=data.dashboard;
  })
}
}
