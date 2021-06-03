import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import notify from 'devextreme/ui/notify';
import { Producto } from 'src/app/models/productos';
import { FacturaDTO } from 'src/app/models/factura';
import { UsuarioDTO } from 'src/app/models/usuario';
import { DetalleFactura } from 'src/app/models/detalleFacturaDTO';
import { GuardarFactura } from 'src/app/models/guardarFactura';
import { Location } from '@angular/common';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  formDataFactura: FacturaDTO;
  formDataCliete: UsuarioDTO;
  ModalVisible = true;
  productos: Producto[];
  detalleFactura: DetalleFactura[];
  guardarFactura: GuardarFactura;

  constructor(
    private location: Location,
    private genericService: GenericService,
  ) { }

  ngOnInit(): void {
    this._getProducto();
    this._initVariables();
  }
  private _initVariables(): void {
    this.formDataFactura = new FacturaDTO();
    this.formDataCliete = new UsuarioDTO();
    this.detalleFactura = [];
    this.guardarFactura = new GuardarFactura();
    this.guardarFactura.detalleFacturaDTO = []
  }

  onFormSubmitDetalle(e: any) {
    e.preventDefault();
    if (this.formDataFactura.cantidadDTO > this.formDataFactura.stockDTO) {
      notify("Cantidad de productos no permitida, Unidades dispobles " + this.formDataFactura.stockDTO);
    } else {
      this.detalleFactura.push({
        idProductoDTO: this.productos.filter(x => x.nombreDTO == this.formDataFactura.productoDTO)[0].codigoDTO,
        productoDTO: this.formDataFactura.productoDTO,
        cantidadDTO: this.formDataFactura.cantidadDTO,
        valorUnidadDTO: this.formDataFactura.valorUnitarioDTO,
        valorTotalDTO: (this.formDataFactura.valorUnitarioDTO * this.formDataFactura.cantidadDTO)
      });
      this.formDataFactura.valorDTO = this.formDataFactura.valorDTO + (this.formDataFactura.valorUnitarioDTO * this.formDataFactura.cantidadDTO);
      this.formDataFactura.cantidadDTO = null;
    }
  }
  _getProducto() {
    this.genericService.getProducto().subscribe(response => {
      if (response <= 0) return notify("Sin productos en existencia");
      this.productos = response;
    })
  };

  onClientSutmit(e: any) {
    e.preventDefault();
    if (this.formDataCliete.idDTO != null) {
      this.genericService.getUsers(this.formDataCliete.idDTO).subscribe(response => {
        if (response.idClientDTO != null) {
          this.ModalVisible = false;
          this.formDataFactura.personaDTO = response.nombresDTO + ' ' + response.apellidosDTO
          this.formDataFactura.fechaVentaDTO = new Date();
        } else {
          notify("Cliente sin registrar");
          this.ModalVisible = true;
        }
      })
    }
  }

  onSelectType(e: any) {
    if (e.selectedItem != null) {
      this.formDataFactura.valorUnitarioDTO = e.selectedItem.valorUnidadDTO;
      this.formDataFactura.stockDTO = e.selectedItem.stockDTO;
      this.formDataFactura.productoDTO = e.selectedItem.nombreDTO;
    }
  }

  borrarDetalle(e: DetalleFactura) {
    let index = this.detalleFactura.findIndex(x => x.idProductoDTO === e.idProductoDTO);
    this.detalleFactura.splice(index, 1)
    this.formDataFactura.valorDTO = (this.formDataFactura.valorDTO - e.valorTotalDTO);
  }

  GuardarFactura() {
    this.guardarFactura.clienteDTO = this.formDataCliete.idDTO;
    this.guardarFactura.fechaVentaDTO = this.formDataFactura.fechaVentaDTO;
    this.guardarFactura.valorTotalDTO = this.formDataFactura.valorDTO;
    this.guardarFactura.detalleFacturaDTO = this.detalleFactura;
    this.genericService.SaveFactura(this.guardarFactura).subscribe(response => {
      notify("Registro exitoso!!");
      this.location.back();
    })
  }
}
