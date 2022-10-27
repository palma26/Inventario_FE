import { Component,
    OnInit,
    TemplateRef, 
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css'],
    encapsulation: ViewEncapsulation.None,
  })

  export class productoComponent implements OnInit{

    ngOnInit(){
        
    }
  }