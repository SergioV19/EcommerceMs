import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario, SendUsuario, GetUsuario, id } from '../app/models/Usuario';//../models/Usuario

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  URL_API = 'https://ms-ussers.herokuapp.com/api'
  URL_API_USR = 'https://ms-ussers.herokuapp.com/api/usr'
  URL_API_DISABLE = 'https://ms-ussers.herokuapp.com/api/delete/'
  // URL_API_DISABLE = 'https://localhost:3200/api/delete/'
  // URL_API = 'https://localhost:3200/api/'
  
  users : Usuario[] = [];
  constructor(private http: HttpClient) { }

  // users = Usuario[]

  getUsers(index: String) {
    return this.http.get<Usuario[]>(this.URL_API+"page/"+index);
  }

  getUsersByName(index: String) {
    var dato = []
    dato.push({
      "name": index
    })
    JSON.stringify(dato);

    // return this.http.get<Usuario[]>(this.URL_API+"/name"+index, 
    // );
  }

  registerUser(NAME: string, LAST_NAME: string, EMAIL: string, TYPE_DOCUMENT: string, DOCUMENT: string, PASSWORD: string) {
    //parametros de todo lo que se tiene que enviar
    let registerData: SendUsuario = {
      NAME,
      LAST_NAME,
      EMAIL,
      TYPE_DOCUMENT,
      DOCUMENT,
      STATE: "a",
      PASSWORD
    }
    console.log(registerData)
    return this.http.post<any>(this.URL_API_USR, registerData)
  }

  
  deleteUser(ID_USUARIOS:number){
    // console.log(`${this.URL_API+"delete"}/${ID}`)
    const localURL =""+this.URL_API_DISABLE+ID_USUARIOS
    let idr: id ={
      ID_USUARIOS
    }
    this.http.patch(`${this.URL_API+"delete"}/${ID_USUARIOS}`,idr)
    this.http.patch(this.URL_API_DISABLE, idr)
    console.log(localURL)
  }

  // pendiente conexion con login
  // logUser(EMAIL: string, PASSWORD: string) {
  //   let getUsr: GetUsuario = {
  //     EMAIL,
  //     PASSWORD
  //   }

  //   this.http.get(this.URL_API + "/login", getUsr).
  //     subscribe(res => {
  //       alert(res)
  //     })
  // }
}