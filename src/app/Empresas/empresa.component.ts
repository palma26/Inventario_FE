import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";

import { Router } from "@angular/router";
import { observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Data } from "../models/Empresas/DataEmpresa";
import { Empresa } from "../models/Empresas/Empresa";
import { empresaService } from "../Services/Empresa.service";

import {
  NgbModalConfig,
  NgbModal,
  ModalDismissReasons,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-empresas",
  templateUrl: "empresa.Component.html",
  styleUrls: ["empresa.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class empresaComponent implements OnInit {
  submitted = false;

  newForm: FormGroup;

  closeResult = "";
  listEmpresas: Empresa;
  entries: number = 11;
  selected: any[] = [];
  activeRow: any;
  focus5;
  selectedOp: Data;
  modalnuevo: NgbModal;

  constructor(
    private _empresaService: empresaService,
    private _Router: Router,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.GetEmpresas();

      //inicializando formulario para agregar
      this.newForm = this._formBuilder.group({
        nombre: [null, Validators.required],
      });
  }

  //Metodo para obtener empresas
  GetEmpresas() {
    this._empresaService.GetEmpresas().subscribe((data) => {
      console.log(data);
      this.listEmpresas = data;
      console.log(this.listEmpresas);
    });
  }

  //Metodo para agregar empresas
  AddEmpresa() {
    this.submitted = true;

    if (this.newForm.invalid) {
      console.log(this.newForm);
      return;
    }

    let empresa: Data  = {
      Nombre:this.newForm.get("nombre").value,
      Nit: this.newForm.get("nit").value,
      Direccion:this.newForm.get("direccion").value,
      Telefono: this.newForm.get("telefono").value,
    };

    this._empresaService.AddEmpresa(empresa).subscribe((data) => {

      if(data.strResponseCode == '00'){
        this.newForm.reset();
        alert("REGISTRO EXITOSO");

        this.submitted = false;

        this.GetEmpresas();
      }else{
        alert("error al registrar")
      }

    })

  }


  openModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
