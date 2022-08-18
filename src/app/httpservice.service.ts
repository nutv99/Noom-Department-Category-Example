import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpserviceService {

  constructor(private http:HttpClient) { }

  public getDatas(): Observable<any> {
   const url = 'https://reqres.in/api/users?page=1';

    return this.http.get<any>(url);
  }

  public InsertDatas(dataPost:any): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
 
     return this.http.post<any>(url,dataPost);
   }

}