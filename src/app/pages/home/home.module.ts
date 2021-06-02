import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { FacturaComponent } from "../factura/factura.component";
import { RouterModule, Routes } from '@angular/router';
//deveztreme
import { DevextremeModule } from "../../components/devextreme/devextreme.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent    
  },
  {
    path: 'factura',
    component: FacturaComponent    
  },
  { path: '**', redirectTo: ''}
]
@NgModule({
  declarations: [
    FacturaComponent,
    HomeComponent,
  ],
  imports: [
    DevextremeModule,
    CommonModule,        
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
