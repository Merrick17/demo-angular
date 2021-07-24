import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  loginUser(body: any) {
    this.http.post('http://localhost:3000/users/login', body).subscribe((data: any) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userID',data.userID) ; 
        alert('User connected !')
        this.router.navigate(['/'])
      }
    })
  }

  verifAuth() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
