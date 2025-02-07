import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

export const JWT_NAME = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    ) {

  }

  public login(email: string, password: string) {
    return this.http.post<any>(this.apiUrl+'/api/users/login', {email, password}).pipe(
      map((token) => {
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
    })
    )
  }

  public isAuthentificated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem(JWT_NAME));
  }

  public logout() {
    localStorage.removeItem(JWT_NAME);
  }
}
