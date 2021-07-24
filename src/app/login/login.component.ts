import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http' ; 
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom:FormGroup; 

  constructor(private formBuilder:FormBuilder,private authServ:AuthService) {
    this.loginFrom = this.formBuilder.group({
      email:['',Validators.required], 
      password:['',Validators.required]
    }); 
   }

  ngOnInit(): void {
 
  }

  submitForm()
  { console.log("FORM VALID OR NOT",this.loginFrom.valid) ; 
    console.log("FORMVALUE",this.loginFrom.value) ; 
    this.authServ.loginUser(this.loginFrom.value); 
    
  }


}
