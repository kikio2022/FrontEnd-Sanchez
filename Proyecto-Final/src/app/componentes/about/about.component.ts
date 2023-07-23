import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
img: string = '';
nombre: string = '';
puesto: string = '';
text: string = '';

  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.img=data.about.img;
      this.nombre=data.about.nombre;
      this.puesto=data.about.puesto;
      this.text=data.about.text;
      
    })
}
}