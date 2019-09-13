import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.url

  constructor(private httpclient: HttpClient) { }
  post(url,data){
    return this.httpclient.post(this.baseUrl + url, data)
  }
  get(url){
    return this.httpclient.get(this.baseUrl + url)
  }
}
