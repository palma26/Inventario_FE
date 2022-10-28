import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { empresaComponent } from '../../Empresas/empresa.component';
import { sucursalComponent } from'../../Sucursales/Sucursales.component';
import { BodegaComponent } from '../../Bodegas/Bodega.component'
import { CategoriaComponent } from '../../Categorias/categoria.component';
import { productoComponent } from '../../Productos/producto.component';
import { proveedorComponent } from '../../Proveedores/proveedor.component';
import { clienteComponent } from '../../Clientes/cliente.component';
import { compraComponent } from '../../Compras/compra.component';
import { ventaComponent } from '../../Ventas/venta.component';
import { ajusteComponent } from '../../Ajustes/ajuste.component';
import { rolComponent } from '../../Roles/rol.component';
import { usuarioComponet } from '../../Usuarios/usuario.component';


const tipoU: string = 'a';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Empresas',     component: empresaComponent },
    { path: 'Sucursales',     component: sucursalComponent },
    { path: 'Bodegas',     component: BodegaComponent },
    { path: 'Categorias'  , component: CategoriaComponent },
    { path: 'Productos'  , component: productoComponent },
    { path: 'Proveedores'  , component: proveedorComponent },
    { path: 'Clientes'  , component: clienteComponent },
    { path: 'Compras'  , component: compraComponent },
    { path: 'Ventas'  , component: ventaComponent },
    { path: 'Ajustes'  , component: ajusteComponent },
    { path: 'Roles'  , component: rolComponent },
    { path: 'Usuarios'  , component: usuarioComponet },
];
