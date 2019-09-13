import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService,private snackbar:MatSnackBar,private router:Router) { }

  login(user){
    let data={
      userEmail:user.userEmail,
      password:user.password
    }
    this.httpService.post('login', data).subscribe(
      (response) => {
        console.log("responselogin", response);
        this.snackbar.open('loggedin successful', 'End Now', { duration: 2000 });
        this.router.navigateByUrl('shows');
      },
      (error) => {
        console.log("error", error);
        this.snackbar.open('loggedin unsuccessful', 'End Now', { duration: 2000 });
      }
    )
  }
}
