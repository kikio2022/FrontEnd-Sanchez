import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.css']
})
export class BotonLoginComponent implements OnInit{
icono: string = '';
url: string = '';

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.icono=data.botonLogin.icono;
      this.url=data.botonLogin.url;
    })
  }
}
