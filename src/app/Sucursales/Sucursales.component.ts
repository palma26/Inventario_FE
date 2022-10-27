import { Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import {Data} from '../models/Sucursales/DataSucursal';
import { sucursalService } from '../Services/Sucursal.Service';

@Component({
  selector: 'app-sucursal',
  templateUrl: 'Sucursales.Component.html',
  styleUrls: ['Sucursales.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class sucursalComponent implements OnInit{

  constructor(
    private _sucursalService: sucursalService,
  ) {}

  ngOnInit(){
    this.GetSucursales();
  }

  //Metodo para obtener empresas
  GetSucursales(){
    this._sucursalService.GetSucursales().subscribe((data)=>{
      console.log(data);
    })
  }
}
