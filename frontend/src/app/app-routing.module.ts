import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { BusquedaAutorComponent } from './components/busqueda-autor/busqueda-autor.component';
import { BusquedaTituloComponent } from './components/busqueda-titulo/busqueda-titulo.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ItemService } from './services/item.service';
import { LeidosComponent } from './components/leidos/leidos.component';
import { LibroDetalleLeidoComponent } from './components/libro-detalle-leido/libro-detalle-leido.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { Pag404Component } from './components/pag404/pag404.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busquedaTitulo', component: BusquedaTituloComponent, canActivate: [ItemService] },
  { path: 'busquedaAutor', component: BusquedaAutorComponent, canActivate: [ItemService] },
  { path: 'perfil', component: PerfilComponent, canActivate: [ItemService] },
  { path: 'registro', component: RegisterComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [ItemService] },
  { path: 'leidos', component: LeidosComponent, canActivate: [ItemService] },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [ItemService] },
  { path: 'libro-detalle/:id', component: LibroDetalleComponent, canActivate: [ItemService] },
  { path: 'libro-detalle-leido/:id', component: LibroDetalleLeidoComponent, canActivate: [ItemService] },
  { path: 'editarPerfil', component: EditarPerfilComponent, canActivate: [ItemService] },
  { path: 'listaUsuarios', component: ListaUsuariosComponent, canActivate: [ItemService] },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', component: Pag404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
