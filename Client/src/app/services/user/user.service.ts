import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  login(user){
    let data={
      userEmail:user.userEmail,
      password:user.password
    }
    this.httpService.post('login', data).subscribe(
      (response) => {
        console.log("response", response);
      },
      (error) => {
        console.log("error", error);
      }
    )
  }
}
