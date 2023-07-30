import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioService } from './servicios/portfolio.service';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CircleProgressComponent } from './componentes/circle-progress/circle-progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RedesComponent } from './componentes/redes/redes.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProjectComponent } from './componentes/project/project.component';
import { DasboardComponent } from './componentes/dasboard/dasboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { SocialComponent } from './modales/social/social.component';
import { CarouselComponent } from './modales/carousel/carousel.component';
import { InfoComponent } from './modales/info/info.component';
import { EduComponent } from './modales/edu/edu.component';
import { ExpComponent } from './modales/exp/exp.component';
import { SkillsComponent } from './modales/skills/skills.component';
import { WorkComponent } from './modales/work/work.component';
import { AccesoComponent } from './modales/acceso/acceso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    CircleProgressComponent,
    RedesComponent,
    BotonLoginComponent,
    LoginComponent,
    ProjectComponent,
    DasboardComponent,
    ErrorComponent,
    SocialComponent,
    CarouselComponent,
    InfoComponent,
    EduComponent,
    ExpComponent,
    SkillsComponent,
    WorkComponent,
    AccesoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
