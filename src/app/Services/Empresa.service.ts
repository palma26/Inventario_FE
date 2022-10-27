import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransaccionResponse } from '../models/TransaccionResponse';
import { Data as empresa} from '../models/Empresas/DataEmpresa';

@Injectable({
  providedIn: 'root'
})

export class empresaService {
  private headers = new HttpHeaders()
  .set("Authorization", `Basic ${btoa("PR0n3T@:20PR0n3T@20")}`);

  constructor(private _httpClient: HttpClient) {}

  //Metodo para obtener las empresas
  GetEmpresas(): Observable<empresa>{
    return this._httpClient.get<empresa>(`https://localhost:7042/api/Empresas/GetEmpresas`,{
      headers: this.headers
    });
  }
}
