import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransaccionResponse } from '../models/TransaccionResponse';
import {Empresa} from '../models/Empresas/Empresa';
import {Data as empresa} from '../models/Empresas/DataEmpresa';

@Injectable({
  providedIn: 'root'
})

export class empresaService {
  private headers = new HttpHeaders()
  .set("Authorization", `Basic ${btoa("PR0n3T@:20PR0n3T@20")}`);

  constructor(private _httpClient: HttpClient) {}

  //Metodo para obtener las empresas
  GetEmpresas(): Observable<Empresa>{
    return this._httpClient.get<Empresa>(`http://192.168.10.30/inventario/Inventario/api/Empresas/GetEmpresas`,{
      headers: this.headers
    });
  }

  //Metodo para agregar una empresas
  AddEmpresa(empresa: empresa): Observable<TransaccionResponse>{
    return this._httpClient.post<TransaccionResponse>(`http://192.168.10.30/inventario/Inventario/api/Empresas/AddEmpresa`,empresa,  {
      headers: this.headers
    })
  }
}
