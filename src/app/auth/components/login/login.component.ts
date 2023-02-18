import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading= false;
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if(form.invalid) {
      return
    }

    this.isLoading=true;
    this._authService.login(form.value).subscribe((res)=> {
      this.isLoading=false;
    },(error)=> {
      this.isLoading=false
    })
    
  }
}
