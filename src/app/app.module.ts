import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ProductosComponent} from './productos/productos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {VentasComponent} from './ventas/ventas.component';
import {TiendaComponent} from './tienda/tienda.component';
import {AgregarProductoComponent} from './agregar-producto/agregar-producto.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {LoadingButtonComponent} from './loading-button/loading-button.component';
import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import {MatCardMdImage, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {DetalleDeProductoComponent} from './detalle-de-producto/detalle-de-producto.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import { TerminarCompraComponent } from './terminar-compra/terminar-compra.component';
import {MatStepperModule} from "@angular/material/stepper";
import { DetalleDeVentaComponent } from './detalle-de-venta/detalle-de-venta.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdminRolComponent } from './admin-rol/admin-rol.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AssignRolesAdminComponent } from './assign-roles-admin/assign-roles-admin.component';
import { EditRolComponent } from './edit-rol/edit-rol.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewUserComponent } from './view-user/view-user.component';
import { FacturaCompraComponent } from './factura-compra/factura-compra.component';
import { ReporteProductoComponent } from './reporte-producto/reporte-producto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ClientesComponent,
    VentasComponent,
    TiendaComponent,
    AgregarProductoComponent,
    LoadingButtonComponent,
    TarjetaProductoComponent,
    DetalleDeProductoComponent,
    TerminarCompraComponent,
    DetalleDeVentaComponent,
    LoginComponent,
    RegisterUserComponent,
    AdminRolComponent,
    AdminUsersComponent,
    AssignRolesAdminComponent,
    EditRolComponent,
    EditUserComponent,
    NewRoleComponent,
    FilterPipe,
    ViewUserComponent,
    FacturaCompraComponent,
    ReporteProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
