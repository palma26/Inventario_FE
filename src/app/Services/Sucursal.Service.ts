import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal} from '../models/Sucursales/Sucursal';
import { Data as sucursal} from '../models/Sucursales/DataSucursal';

@Injectable({
  providedIn: 'root'
})
export class sucursalService{

  private headers = new HttpHeaders()
  .set("Authorization", `Basic ${btoa("PR0n3T@:20PR0n3T@20")}`);

  constructor(private _httpClient: HttpClient) {}

  //Metodo para obtener sucursales
  GetSucursales(): Observable<Sucursal>{
    return this._httpClient.get<Sucursal>(`http://192.168.10.30/inventario/Inventario/api/Sucursales/GetSucursales`,{
      headers: this.headers
    });
  }
}
