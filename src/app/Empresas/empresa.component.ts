import { Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import{Router} from '@angular/router';
import { observable } from 'rxjs';
import { Data } from '../models/Empresas/DataEmpresa';
import { empresaService } from '../Services/Empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: 'empresa.Component.html',
  styleUrls: ['empresa.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class empresaComponent implements OnInit{

  listEmpresas: Data[];

  columns: any = [
    { name: "Nombre", prop: 'Nombre' },
    { name: "Nit", prop: 'Nit'},
    { name: "Direccion", prop: 'Direccion'},
    { name: "Telefono", prop: 'Telefono'},
  ];
  entries: number = 11;
  selected: any[] = [];
  activeRow: any;
  focus5;
  selectedOp: Data;

  constructor(
    private _empresaService: empresaService, private _Router: Router
  ) {}

  ngOnInit(){
    this.GetEmpresas();
  }

  //Metodo para obtener empresas
  GetEmpresas(){
    this._empresaService.GetEmpresas().subscribe((data =>{
      console.log(data);
      this.listEmpresas.push(data);
    }))
  }

  onActivate(event) {
    this.activeRow = event.row;
  }
}
