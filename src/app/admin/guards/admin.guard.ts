import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // TODO: Implement guard
    return Math.random() > 0.5;
  }
}
