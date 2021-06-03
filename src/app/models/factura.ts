export class FacturaDTO {
    idFacturaDTO: number;
    valorDTO: number;
    fechaVentaDTO: Date;
    personaDTO: string;
    stockDTO: number;
    valorUnitarioDTO: number;
    cantidadDTO: number;
    productoDTO: string;
    constructor() {
        this.idFacturaDTO = null;
        this.valorDTO = null;
        this.fechaVentaDTO = null;
        this.personaDTO = null;
        this.stockDTO = null;
        this.valorUnitarioDTO = null;
        this.cantidadDTO = null;
        this.productoDTO = null;
    }
}