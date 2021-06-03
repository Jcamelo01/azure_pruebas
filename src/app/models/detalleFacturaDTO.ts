export class DetalleFactura {
    idProductoDTO: number;
    productoDTO: string;
    cantidadDTO: number;
    valorUnidadDTO: number;
    valorTotalDTO: number;
    constructor() {
        this.idProductoDTO = null;
        this.productoDTO = null;
        this.cantidadDTO = null;
        this.valorUnidadDTO = null;
        this.valorTotalDTO = null;
    }
}