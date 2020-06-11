import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()) {
      Swal.fire('Not connected', 'Veuillez vous connecter afin d\'acceder a la ressource demandee!', 'error')
        .then(res => {
          if (res.value) {
            this.router.navigate(['login'], {queryParams: {redirect: state.url}});
            return false;
          }
        });
    } else if (this.authService.isTokenExpired()) {
      Swal.fire('Expire', 'Votre token a expire. Veuillez vous reconnecter afin SVP!', 'error')
        .then(res => {
          if (res.value) {
            this.router.navigate(['login'], {queryParams: {redirect: state.url}});
            return false;
          }
        });
    } else {
      return true;
    }
  }

}
