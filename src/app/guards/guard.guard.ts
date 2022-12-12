import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getToken } from '../services/localStorage';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {

    if (!!localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;

  }
}
