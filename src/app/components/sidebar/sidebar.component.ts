import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/Sucursales', title: 'Sucursales',  icon:'education_atom', class: '' },
    { path: '/Bodegas', title: 'Bodegas',  icon:'location_map-big', class: '' },
    { path: '/Categorias', title: 'Categorias',  icon:'ui-1_bell-53', class: '' },

    { path: '/Productos', title: 'Productos',  icon:'users_single-02', class: '' },
    { path: '/Cliente', title: 'Cliente',  icon:'design_bullet-list-67', class: '' },
    { path: '/Usuarios', title: 'Usuarios',  icon:'text_caps-small', class: '' },
    { path: '/Roles', title: 'Roles',  icon:'objects_spaceship', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
