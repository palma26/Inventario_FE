import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { empresaComponent } from '../../Empresas/empresa.component';
import { sucursalComponent } from'../../Sucursales/Sucursales.component';
import { BodegaComponent } from '../../Bodegas/Bodega.component'
import { CategoriaComponent } from '../../Categorias/categoria.component';
import { productoComponent } from '../../Productos/producto.component';

const tipoU: string = 'a';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Empresas',     component: empresaComponent },
    { path: 'Sucursales',     component: sucursalComponent },
    { path: 'Bodegas',     component: BodegaComponent },
    { path: 'Categorias'  , component: CategoriaComponent },
    { path: 'Productos'  , component: productoComponent },
];
