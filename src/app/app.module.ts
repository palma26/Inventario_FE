import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpresaComponent } from './Administracion/empresa/empresa.component';
import { SucursalComponent } from './Administracion/sucursal/sucursal.component';
import { MenuAdminComponent } from './Dashboard/menu-admin/menu-admin.component';
import { MenuUsuarioComponent } from './Dashboard/menu-usuario/menu-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    SucursalComponent,
    MenuAdminComponent,
    MenuUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
