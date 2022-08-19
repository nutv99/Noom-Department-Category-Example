import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User,UserInformation } from './user';

class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}

@Injectable({  providedIn: 'root' })
export class MyHttpService {

  apiRoot: string = "https://itunes.apple.com/search";

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
     }
    );

    return this.Response ;
 
    
   }

   public getDatasUniverSal2(pagecode:string): Observable<any> {
    //const url = 'https://lovetoshopmall.com/dataservice/getDataUniverSal.php?pagecode='+ pagecode ;
    const url = 'https://lovetoshopmall.com/dataservice/categoryTest.php?pagecode='+ pagecode ;
    return this.http.get<any>(url) ;

    
 
    
   }

   search(term: string): Observable<SearchItem[]> {
    this.apiRoot  = "https://itunes.apple.com/search";
    alert(this.apiRoot) ;
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
     .pipe(        
      map((response:any) => {
        console.log(response);
        return response.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }


}