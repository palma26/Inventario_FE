import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { empresaComponent } from '../../Empresas/empresa.component';
import { sucursalComponent } from'../../Sucursales/Sucursales.component';

const tipoU: string = 'a';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Empresas',     component: empresaComponent },
    { path: 'Sucursales',     component: sucursalComponent },
];
