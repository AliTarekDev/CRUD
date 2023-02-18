import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading= false
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm) {
   
    if(form.invalid) {
      return
    }
    this.isLoading=true;

    this._authService.signup(form.value).subscribe((res)=> {      
      this.isLoading= false
    }, (error)=>{
      this.isLoading= false;
      return
    })

  }

}
