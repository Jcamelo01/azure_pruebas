import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import notify from 'devextreme/ui/notify';
import { FacturaDTO } from 'src/app/models/factura';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gridResultFactura: FacturaDTO[];
  constructor(
    private genericService: GenericService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._getFactura();
  }

  _getFactura() {
    this.genericService.getfactura().subscribe(response => {
      if (response <= 0) return notify("no existen facturas registradas");
      this.gridResultFactura = response;
    })
  };

  onCreateClick() {
    this.router.navigate(['./factura',], { relativeTo: this.activatedRoute });
  }

}
