export class GuardarFactura {
    clienteDTO: number;
    fechaVentaDTO: Date;
    valorTotalDTO: number;
    detalleFacturaDTO: any[]
    constructor() {
        this.clienteDTO = null;
        this.fechaVentaDTO = null;
        this.valorTotalDTO = null;
        this.detalleFacturaDTO = []
    }
}

