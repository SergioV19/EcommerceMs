import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AgregarProductoComponent} from "./agregar-producto/agregar-producto.component";
import {DetalleDeProductoComponent} from "./detalle-de-producto/detalle-de-producto.component";
import {TerminarCompraComponent} from "./terminar-compra/terminar-compra.component";
import {DetalleDeVentaComponent} from "./detalle-de-venta/detalle-de-venta.component";
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { GuardGuard  } from './guards/guard.guard';
import { LoginGuard  } from './guards/login.guard';
import { FacturaCompraComponent } from './factura-compra/factura-compra.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent, canActivate:[GuardGuard]},
  {path: 'productos/agregar', component: AgregarProductoComponent,canActivate:[GuardGuard]},
  {path: 'clientes', component: ClientesComponent,canActivate:[GuardGuard]},
  {path: 'ventas', component: VentasComponent,canActivate:[GuardGuard]},
  {path: 'tienda', component: TiendaComponent,canActivate:[GuardGuard]},
  {path: 'producto/detalle/:id', component: DetalleDeProductoComponent,canActivate:[GuardGuard]},
  {path: 'terminar_compra', component: TerminarCompraComponent,canActivate:[GuardGuard]},
  {path: 'detalle-venta/:id', component: DetalleDeVentaComponent,canActivate:[GuardGuard]},
  {path: 'factura-compra/:id', component: FacturaCompraComponent,canActivate:[GuardGuard]},
  {path: 'registerUser',component:RegisterUserComponent},
  {path: 'login',component:LoginComponent},
  {path: 'login', redirectTo: "/login", pathMatch: "full"},
  {path: '**', redirectTo: "/login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  
  useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
