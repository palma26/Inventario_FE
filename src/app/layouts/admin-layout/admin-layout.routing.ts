import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';


const tipoU: string = 'a';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'Sucursales',   component: UserProfileComponent },
    { path: 'Bodegas',     component: TableListComponent },
    { path: 'Categorias',     component: TypographyComponent },
    { path: 'Productos',          component: IconsComponent },
    { path: 'Cliente',           component: MapsComponent },
    { path: 'Usuarios',  component: NotificationsComponent },
    { path: 'Roles',        component: UpgradeComponent }
];
