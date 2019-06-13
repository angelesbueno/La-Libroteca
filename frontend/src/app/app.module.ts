import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule, MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatProgressSpinnerModule, MatSidenavModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BusquedaTituloComponent } from "./components/busqueda-titulo/busqueda-titulo.component";
import { BusquedaAutorComponent } from "./components/busqueda-autor/busqueda-autor.component";
import { RegisterComponent } from "./components/register/register.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InicioComponent } from './components/inicio/inicio.component';

// Services
import { ItemService } from "./services/item.service";
import { CustomValidatorsService } from './services/custom-validators.service';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LeidosComponent } from './components/leidos/leidos.component';
import { KeysPipe } from './components/pipes/keys.pipe';
import { LibroDetalleLeidoComponent } from './components/libro-detalle-leido/libro-detalle-leido.component';
import { StarsPipe } from './components/pipes/stars.pipe';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaTituloComponent,
    BusquedaAutorComponent,
    RegisterComponent,
    FooterComponent,
    InicioComponent,
    LibroDetalleComponent,
    PerfilComponent,
    LeidosComponent,
    KeysPipe,
    LibroDetalleLeidoComponent,
    StarsPipe,
    FavoritosComponent,
    Pag404Component,
    EditarPerfilComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule, MatButtonModule, MatDividerModule, MatGridListModule, MatProgressSpinnerModule, MatSidenavModule,
    ModalModule.forRoot()
  ],
  providers: [ItemService, CustomValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
