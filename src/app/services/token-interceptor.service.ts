import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {getToken} from './localStorage';
@Injectable({
  providedIn: 'root'

})
export class TokenInterceptorService implements HttpInterceptor {


  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = getToken();
    const tokenHeader = req.clone({
      setHeaders:{
        Autorization:token
      }
    })
    return next.handle(tokenHeader)
  }
}
