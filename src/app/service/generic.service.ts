import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GuardarFactura } from '../models/guardarFactura';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  ApiUrl = "https://localhost:44334/";
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  getUsers(idUnser: number) {
    return this.http.get<any>(`${this.ApiUrl}GetClietById?idClient=${idUnser}`)
      .pipe(map(user => {
        return user;
      }));
  }

  SaveFactura(guardarFactura: any) {
    return this.http.post<any>(`${this.ApiUrl}CrearFactura`, guardarFactura)
      .pipe(map(response => {
        return response;
      }));
  }

  getfactura() {
    const valor = 4
    return this.http.get<any>(`${this.ApiUrl}GetListFactura`)
      .pipe(map(response => {
        return response;
      }));
  }

  getProducto() {
    const valor = 4
    return this.http.get<any>(`${this.ApiUrl}GetProducto`)
      .pipe(map(response => {
        return response;
      }));
  }
}
