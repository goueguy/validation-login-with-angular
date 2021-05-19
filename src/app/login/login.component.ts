import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  submitted:boolean = false;
  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })
 }
  ngOnInit(): void{
    
  }
  
  
  onLoginSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }else{
      alert("MOUTAR DE DIJON");
    }
    
  }
  public get email(): FormArray{
    return this.loginForm.get("email") as FormArray;
  }
  public get password(): FormArray{
    return this.loginForm.get("password") as FormArray;
  }
}

