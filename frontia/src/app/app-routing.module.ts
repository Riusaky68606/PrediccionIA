import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviarDatosComponent } from './components/enviar-datos/enviar-datos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'prediccion', component: EnviarDatosComponent },
  { path: '', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
