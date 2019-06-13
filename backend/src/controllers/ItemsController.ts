/*==============================================================================
  Imports
==============================================================================*/
import * as express from "express";
// tslint:disable-next-line: max-line-length
import { Body, Controller, Delete, Get, Header, Patch, Path, Post, Put, Query, Request, Route, Security, SuccessResponse, Tags } from "tsoa";
import * as sqlHelperNew from "../sqlHelperNew";

/*==============================================================================
  Invoice Controller
==============================================================================*/
@Route("items")
@Tags("Items")
export class ItemsController extends Controller {
  public id: string;
  public campo: string;
  public busqueda: string;

  // SEARCH USER PARA VALIDACIÓN
  @SuccessResponse(200)
  @Get("searchUser/{user}")
  public async searchUser(@Path("user") user: string): Promise<any> {
    return await sqlHelperNew.searchUser(user);
  }

  // SEARCH EMAIL PARA VALIDACIÓN
  @SuccessResponse(200)
  @Get("searchEmail/{email}")
  public async searchEmail(@Path("email") email: string): Promise<any> {
    return await sqlHelperNew.searchEmail(email);
  }

  // NEW USER
  @SuccessResponse(200)
  @Post("newUser")
  public async newUser(@Request() req: express.Request) {
    return await sqlHelperNew.altaUser(req.body);
  }

  // CHECK USER FOR LOGIN
  @SuccessResponse(200)
  @Post("checkUser")
  public async checkUser(@Request() req: express.Request) {
    return await sqlHelperNew.checkUser(req.body);
  }

  // GET USER
  @SuccessResponse(200)
  @Get("getUser")
  public async getUser(@Request() req: express.Request) {
    return await sqlHelperNew.getUser(req.headers.authorization);
  }

  // CHECK TOKEN
  @SuccessResponse(200)
  @Get("checkToken")
  public async checkToken(@Request() req: express.Request) {
    return await sqlHelperNew.checkToken(req.headers.authorization);
  }

  // CHECK UN LIBRO LEÍDO EN CONCRETO
  @SuccessResponse(200)
  @Post("checkReadedBook")
  public async checkReadedBook(@Request() req: express.Request) {
    return await sqlHelperNew.checkReadedBook(req.body);
  }

  // AÑADIR LIBRO LEÍDO
  @SuccessResponse(200)
  @Post("addLeido")
  public async addLeido(@Request() req: express.Request) {
    return await sqlHelperNew.addLeido(req.headers.authorization, req.body);
  }

  // OBTENER TODOS LOS LIBROS LEÍDOS POR UN USUARIO
  @SuccessResponse(200)
  @Get("takeAllReadedBooks")
  public async takeAllReadedBooks(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.takeAllReadedBooks(req.headers.authorization);
  }

  // OBTENER TODOS LOS LIBROS FAVORITOS DE UN USUARIO
  @SuccessResponse(200)
  @Get("takeAllFavsBooks")
  public async takeAllFavsBooks(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.takeAllFavsBooks(req.headers.authorization);
  }

  // BORRAR LIBRO DE LISTA DE LIBROS LEÍDOS
  @SuccessResponse(200)
  @Get("borrarLeido/{idLibro}")
  public async deleteReadedBook(@Path("idLibro") idLibro: number, @Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.deleteReadedBook(req.headers.authorization, idLibro);
  }

  // MODIFICAR PUNTUACIÓN DE LIBRO LEÍDO
  @SuccessResponse(200)
  @Post("modificarNotaLibroLeido")
  public async modificarNotaLibroLeido(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.modificarNotaLibroLeido(req.headers.authorization, req.body);
  }

  // MODIFICAR COMENTARIOS DE LIBRO LEÍDO
  @SuccessResponse(200)
  @Post("modificarComentariosLibroLeido")
  public async modificarComentariosLibroLeido(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.modificarComentariosLibroLeido(req.headers.authorization, req.body);
  }

  // AÑADIR LIBRO LEÍDO A FAVORITOS
  @SuccessResponse(200)
  @Get("addFavorito/{id}")
  public async addFavorito(@Path("id") id: number, @Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.addFavorito(req.headers.authorization, id);
  }

  // BORRAR LIBRO FAVORITO
  @SuccessResponse(200)
  @Get("borrarFavorito/{idLeido}")
  public async borrarFavorito(@Path("idLeido") idLeido: number, @Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.borrarFavorito(req.headers.authorization, idLeido);
  }

  // MODIFICAR DATOS DE USUARIO
  @SuccessResponse(200)
  @Post("updateUser")
  public async updateUser(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.updateUser(req.headers.authorization, req.body);
  }

  // OBTENER TODOS LOS USUARIOS REGISTRADOS
  @SuccessResponse(200)
  @Get("allUsers")
  public async allUsers(@Request() req: express.Request): Promise<any> {
    return await sqlHelperNew.allUsers(req.headers.authorization);
  }
}
