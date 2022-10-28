import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { empresaComponent } from '../../Empresas/empresa.component';
import { sucursalComponent } from '../../Sucursales/Sucursales.component';
import { BodegaComponent} from '../../Bodegas/Bodega.component';
import { CategoriaComponent} from '../../Categorias/categoria.component';
import { productoComponent } from '../../Productos/producto.component';
import { proveedorComponent } from '../../Proveedores/proveedor.component';
import { clienteComponent } from '../../Clientes/cliente.component';
import { compraComponent } from '../../Compras/compra.component';
import { ventaComponent } from '../../Ventas/venta.component';
import { ajusteComponent } from '../../Ajustes/ajuste.component';
import { rolComponent } from '../../Roles/rol.component';
import { usuarioComponet } from '../../Usuarios/usuario.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    IconsComponent,
    empresaComponent,
    sucursalComponent,
    BodegaComponent,
    CategoriaComponent,
    productoComponent,
    proveedorComponent,
    clienteComponent,
    compraComponent,
    ventaComponent,
    ajusteComponent,
    rolComponent,
    usuarioComponet,
  ]
})

export class AdminLayoutModule {}
