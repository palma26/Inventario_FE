import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/Empresas', title: 'Empresas',  icon:'location_map-big', class: '' },
  { path: '/Sucursales', title: 'Sucursales',  icon:'location_map-big', class: '' },
  { path: '/Bodegas', title: 'Bodegas',  icon:'location_map-big', class: '' },
  { path: '/Categorias', title: 'Categorias',  icon:'location_map-big', class: '' },
  { path: '/Productos', title: 'Productos',  icon:'location_map-big', class: '' },
  { path: '/Proveedores', title: 'Proveedores',  icon:'location_map-big', class: '' },
  { path: '/Clientes', title: 'Clientes',  icon:'location_map-big', class: '' },
  { path: '/Compras', title: 'Compras',  icon:'location_map-big', class: '' },
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
