import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './componentes/project/project.component';
import { LoginComponent } from './componentes/login/login.component';
import { DasboardComponent } from './componentes/dasboard/dasboard.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  { path: 'project', component:ProjectComponent},
  {path: 'login' , component:LoginComponent},
  { path: 'dashboard' , component:DasboardComponent},
  { path: '**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
