import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  loginForm = new FormGroup({

    user: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(5)])

  })

  loginAdmin() {
    if (this.user?.value === "Admin@foodie.com" && this.pass?.value === "Admin@123") { this.router.navigate(['/dish']) }
    else {
      alert("Wrong Credentials")
      console.log(this.user?.value + "/n" + this.pass?.value)
    }
  }

  get user() {
    return this.loginForm.get('user');
  }

  get pass() {
    return this.loginForm.get('pass');
  }


}
