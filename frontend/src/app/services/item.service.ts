import { environment } from './../../environments/environment';
import {
    HttpClient,
    HttpHeaders,
    HttpResponse,
    HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ItemService implements CanActivate {
    constructor(protected httpClient: HttpClient, private router: Router) {}

    private isLogged = false;
    private token: string;
    private username: string;

    /*==============================================================================
        TOKEN
==============================================================================*/

    // GUARDAR TOKEN EN sessionStorage
    saveTokenSessionStorage(token: string) {
        sessionStorage.setItem("token", token);
        // this.hayToken = true;
    }

    // GUARDAR USUARIO EN EL sessionStorage
    saveUserSessionStorage(user: any) {
        sessionStorage.setItem("user", user);
    }

    // OBTENER TOKEN DEL sessionStorage
    takeTokenSessionStorage() {
        this.token = sessionStorage.getItem("token");
        return this.token;
    }

    // OBTENER USERNAME DEL sessionStorage
    takeUsernameSessionStorage() {
        this.username = sessionStorage.getItem("user");
        return this.username;
    }

    // SE UTILIZA EN EL ENRUTADOR PARA COMPROBAR SI SE ESTÁ LOGADO CORRECTAMENTE Y EL TOKEN NO HA SIDO MANIPULADO
    // TRUE: PERMITE QUE SE INICIE EL COMPONENTE
    // FALSE: ECHA DE LA APLICACIÓN
    canActivate(): boolean {
        if (sessionStorage.getItem("token")) {
            this.isLogged = true;
        }
        if (!this.isLogged) {
            this.router.navigate(["/login"]);
        }
        return this.isLogged;
    }

    // ASIGNACIÓN DE BOOLEAN
    setActivate(isLogged: boolean) {
        this.isLogged = isLogged;
    }

    // LOGOUT DE LA APLICACIÓN. SE LIMPIA EL SESSIONSTORAGE Y SE REDIRIGE AL LOGIN
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/home']);
    }

    /*==============================================================================
==============================================================================*/

    // RUTA AL BACK
    protected basePath = environment.basePath;
    // https://libroteca.herokuapp.com/ eso por localhost:3000

    // API KEY de Google Books
    protected apiKey = "AIzaSyA1rNwQeY82jsHyHxPheLnDl8frnbkaEtc";

    // CABECERAS DE PETICIONES
    public defaultHeaders = new HttpHeaders();

    // BUSCAR POR TÍTULO DIRECTAMENTE EN LA API GOOGLE BOOKS
    public getSearchByTit(tit): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        let ruta = `https://www.googleapis.com/books/v1/volumes?q=${tit}+intitle:${tit}&key=${
            this.apiKey
        }&maxResults=40`;
        return this.httpClient.get<any>(ruta, { headers });
    }

    // BUSCAR POR AUTOR DIRECTAMENTE EN LA API DE GOOGLE BOOKS
    public getSearchByAut(autor): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        let ruta = `https://www.googleapis.com/books/v1/volumes?q=${autor}+inauthor:${autor}&key=${
            this.apiKey
        }&maxResults=40`;
        return this.httpClient.get<any>(ruta, { headers });
    }

    // BUSCAR POR ID GOOGLE DIRECTAMENTE EN LA API GOOGLE BOOKS
    public getSearchById(id: string): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        let ruta = `https://www.googleapis.com/books/v1/volumes/${id}?key=${
            this.apiKey
        }`;
        return this.httpClient.get<any>(ruta, { headers });
    }

    /*==============================================================================
    HASTA AQUÍ API GOOGLE BOOKS
==============================================================================*/

    // COMPROBAR USER EN LA BBDD PARA VALIDACIÓN
    public searchUser(user): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.get<any>(this.basePath + `/searchUser/${user}`, {
            headers
        });
    }

    // COMPROBAR EMAIL EN LA BBDD PARA VALIDACIÓN
    public searchEmail(email): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.get<any>(
            this.basePath + `/searchEmail/${email}`,
            {
                headers
            }
        );
    }

    // REGISTRAR USUARIO EN LA BBDD
    public postNewUser(user): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.post<any>(this.basePath + "/newUser", user, {
            headers
        });
    }

    // COGER LOS DATOS DEL USUARIO QUE ESTÁ LOGADO
    public takeUser(): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set("Authorization", `${token}`);
        return this.httpClient.get<any>(this.basePath + "/getUser", { headers });
    }

    // LOGIN BBDD
    public postCheckUser(user): Observable<any> {
        let headers = this.defaultHeaders;
        const httpHeaderAccepts: string[] = ["application/json"];
        headers = headers.set("Access-Control-Allow-Origin", "*");
        return this.httpClient.post<any>(this.basePath + "/checkUser", user, {
            headers
        });
    }

    // COMPROBAR TOKEN FRONT = BACK
    public postCheckToken(): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.get<any>(this.basePath + "/checkToken", {
            headers
        });
    }

    // TRAER TODOS LOS LIBROS AÑADIDOS EN LEÍDOS POR UN USUARIO
    public takeAllReadedBooks(): Observable<string[]> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient
            .get<any>(this.basePath + `/takeAllReadedBooks`, { headers })
            .pipe(
                map(res => {
                    const librosLeidos: any[] = [];
                    if (res.length > 0) {
                        res.forEach(libroLeido => {
                            librosLeidos.push(libroLeido);
                        });
                    }
                    return librosLeidos;
                })
            );
    }

    // TRAER TODOS LOS LIBROS FAVORITOS DE UN USUARIO
    public takeAllFavsBooks(): Observable<string[]> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient
            .get<any>(this.basePath + `/takeAllFavsBooks`, { headers })
            .pipe(
                map(res => {
                    const librosFavs: any[] = [];
                    if (res.length > 0) {
                        res.forEach(libroFav => {
                            librosFavs.push(libroFav);
                        });
                    }
                    return librosFavs;
                })
            );
    }

    // AÑADIR LIBRO A LISTA LEÍDOS BBDD
    public addLeido(libro: any): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.post<any>(this.basePath + "/addLeido", libro, { headers });
    }

    // BORRAR LIBRO DE LA LISTA DE LEÍDOS
    public borrarLeido(idLibro: string): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.get<any>(this.basePath + `/borrarLeido/${ idLibro }`, { headers });
    }

    // MODIFICAR NOTA DE LIBRO LEÍDO
    public modificarNotaLibroLeido(idLibro: string, nota: number): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        const data = {
            idLibro,
            nota
        };
        return this.httpClient.post<any>(this.basePath + "/modificarNotaLibroLeido", data, { headers });
    }

    // MODIFICAR COMENTARIOS DE LIBRO LEÍDO
    public modificarComentariosLibroLeido(idLibro: string, comentarios: string): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        const data = {
            idLibro,
            observaciones: comentarios
        };
        return this.httpClient.post<any>(this.basePath + "/modificarComentariosLibroLeido", data, { headers });
    }

    // AÑADIR LIBRO LEÍDO A FAVORITO
    public addFavorito(id: number): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.get<any>(this.basePath + `/addFavorito/${ id }`, { headers });
    }

    // BORRAR LIBRO FAVORITO
    public borrarFavorito(idLeido: number): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.get<any>(this.basePath + `/borrarFavorito/${idLeido}`, { headers });
    }

    // MODIFICAR USUARIO
    public updateUser(form: any, idUsuario: number): Observable<any> {
        let user = {
            idUsuario,
            nombre: form.nombre,
            apellidos: form.apellidos,
            email: form.email,
            username: form.usuario,
            password: form.contrasena
        };
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.post<any>(this.basePath + '/updateUser', user, { headers });
    }

    // OBTENER TODOS LOS USUARIOS REGISTRADOS
    public allUsers(): Observable<any> {
        let headers = this.defaultHeaders;
        let token = this.takeTokenSessionStorage();
        headers = headers.set('Authorization', `Bearer ${ token }`);
        return this.httpClient.get<any>(this.basePath + '/allUsers', { headers });
    }
}
