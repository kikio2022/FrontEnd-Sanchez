import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-dashboardpanel',
  templateUrl: './dashboardpanel.component.html',
  styleUrls: ['./dashboardpanel.component.css']
})
export class DashboardpanelComponent {
  botones:any;

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.botones=data.dashboard;
    })
  }
}
