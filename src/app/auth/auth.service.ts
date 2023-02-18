import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://crud-api-cnt6.vercel.app/user';
  token:any;
  expiresIn= 0;
  expiresInDuration:any;
  userIsAuthenticated:boolean= false;
  tokenListener= new Subject<boolean>();


  constructor(private http: HttpClient, private _toastService: ToastService, private _router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.userIsAuthenticated
  }

  signup(model: User): Observable<{ message: string; user: User }> {
    return this.http.post<{ message: string; user: User }>(
      `${this.url}/signup`,
      model
    ).pipe(
      tap(()=> {
        this._toastService.addSuccess("Registerd Success");
        this._router.navigate(["/auth/login"])
      }),
      catchError((error)=> {
        this._toastService.addError(error.error.message)
        return throwError(error)
      })
    )
  }

  login(
    model: User
  ): Observable<{ message: string; token: string; expires: number }> {
    return this.http.post<{ message: string; token: string; expires: number }>(
      `${this.url}/login`,
      model
    ).pipe(
      tap((result)=> {
        
        this.token= result.token;
        if(this.token) {
          this.expiresIn= result.expires;
          this.setAuthTimer(this.expiresIn);
          this.userIsAuthenticated= true;
          this.tokenListener.next(true);
          const now= new Date();
          const expirationDate= new Date(now.getTime() + this.expiresIn * 1000 );
          this.saveAuthData(this.token, expirationDate)
        }
        this._toastService.addSuccess("Loign Success");
        this._router.navigate(["/"])
      }),
      catchError((error)=> {
        this._toastService.addError(error.error.message);
        return throwError(error)
      })
    )
  }

  public autoAuthUser() {
    const authInfo= this.getAuthData();
    
    if(!authInfo) {
      return
    }
    const now= new Date();
    const expiresIn= authInfo.expirationDate.getTime() - now.getTime();

    if(expiresIn > 0) {
      this.token= authInfo.token;
      this.userIsAuthenticated= true;
      this.tokenListener.next(true);
      this.setAuthTimer(this.expiresIn / 1000 || 10000)
    }
  }

  onLogout() {
    this.token = null;
    this.userIsAuthenticated = false;
    this.tokenListener.next(false);
    clearTimeout(this.expiresInDuration);
    this.clearAuthData();
    this._router.navigate(['/']); 
}


  private setAuthTimer(duration: number) {
    console.log(duration);
    this.expiresInDuration = setTimeout(()=> {
        this.onLogout();
    },duration * 1000 || 10000)
}

 saveAuthData(token:string, expirationDate: Date) {
  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expirationDate.toISOString());
}

private clearAuthData() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
}

getAuthData() {
  const token = localStorage.getItem('token');
  const expirationDate = localStorage.getItem('expiration');

  if(!token || !expirationDate) {
      return;
  }

  return {
      token: token,
      expirationDate: new Date(expirationDate)
  }
}

}
