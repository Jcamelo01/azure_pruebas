import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './maetro-grid/grid.component';
//decextreme 
import { DevextremeModule } from "../components/devextreme/devextreme.module";


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    DevextremeModule,
    CommonModule
  ],
  exports: [
    GridComponent
  ]
})
export class ComponentsModule { }
