import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { UserForm } from 'src/app/Model/userForm.model';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private _http: HttpClient,private useform:UserForm) { }
  upload(vals){
    let data =vals;
    // console.log(UserForm);
    return data;
  }
  
}
