import { Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

import{Router} from '@angular/router';
import {Data} from '../models/Sucursales/DataSucursal';
import { Sucursal } from '../models/Sucursales/Sucursal';
import { sucursalService } from '../Services/Sucursal.Service';
import { NgbModalConfig, NgbModal,ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sucursal',
  templateUrl: 'Sucursales.Component.html',
  styleUrls: ['Sucursales.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class sucursalComponent implements OnInit{

  listSucursales: Sucursal;
  closeResult = '';
  
  constructor(
    private _sucursalService: sucursalService,
    private modalService: NgbModal, 
  ) {}
 
  ngOnInit(){
    this.GetSucursales();
  }

  //Metodo para obtener empresas
  GetSucursales(){
    this._sucursalService.GetSucursales().subscribe((data)=>{
      console.log(data);
      this.listSucursales = data
    })
  }

  openModal(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
