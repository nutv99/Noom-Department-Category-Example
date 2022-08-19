import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User,UserInformation } from './user';
import { Observable } from 'rxjs';

@Injectable({  providedIn: 'root' })
export class MyHttpService {

  Response:any ; 
  constructor(private http:HttpClient) { }

  public getDatas(): Observable<any> {
   const url = 'https://reqres.in/api/users?page=1';

    return this.http.get<any>(url);
  }

  public InsertDatas(dataPost:any): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
 
     return this.http.post<any>(url,dataPost);
  }

  public UpdateDatas(dataPost:any): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
 
    return this.http.patch<any>(url,dataPost);
  }

  public ReplaceeDatas(dataPost:any): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
 
    return this.http.put<any>(url,dataPost);
  }

  public DeleteDatas(dataPost:any): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
 
    return this.http.delete<any>(url,dataPost);
  }

  public getDatasUniverSal(pagecode:string): Observable<any> {
    //const url = 'https://lovetoshopmall.com/dataservice/getDataUniverSal.php?pagecode='+ pagecode ;
    const url = 'https://lovetoshopmall.com/dataservice/categoryTest.php?pagecode='+ pagecode ;
    this.http.get<any>(url).subscribe((response:any)=>{
        this.Response = response ;
        console.log('From BAck',this.Response)
        return this.Response ;
    });

    return this.Response ;
 
    
   }


}