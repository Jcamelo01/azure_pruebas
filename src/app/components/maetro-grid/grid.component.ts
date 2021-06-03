import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DetalleFactura } from 'src/app/models/detalleFacturaDTO';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() detalleFactura: DetalleFactura[] = [];
  @Output() borrarDetalle = new EventEmitter<DetalleFactura>();

  constructor() { }

  onActionClick(e: any) {
    this.borrarDetalle.emit(e);
  }
  ngOnInit(): void {
  }

}
