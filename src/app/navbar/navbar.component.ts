import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth:boolean= false
  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isAuth= this._authService.getIsAuth();
    this._authService.tokenListener.subscribe((isAuth)=> {
      this.isAuth= isAuth
    })
  }

  onLogout() {
    this._authService.onLogout()
  }

}
