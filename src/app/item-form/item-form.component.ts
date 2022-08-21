import { Component, OnInit } from '@angular/core';
import { MyHttpService} from '../pick.service' ;
import { Subscription,Subject, switchMap, debounceTime,pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import  data from '../asset/itemmaster.json' ;

interface City {
  name: string,
  code: string,
  inactive:any 
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
value1:string = '';
subscription?: Subscription;
ItemMaster?:  any  = data;

onSearchDataSwitchMap = new Subject<string>();


constructor(private myservice:MyHttpService,private http: HttpClient) {

  this.onSearchDataSwitchMap.pipe(
    debounceTime(100),
    switchMap(searchText=>{
    return this.myservice.getDatasUniverSal3(this.value1)
  })).subscribe(value=>console.log(value));

  
    this.cities = [
        {name: 'New York', code: 'NY',inactive: false},
        {name: 'Rome', code: 'RM', inactive: true},
        {name: 'London', code: 'LDN', inactive: false},
        {name: 'Istanbul', code: 'IST', inactive: true},
        {name: 'Paris', code: 'PRS', inactive: false}
    ];



 }

 

ngOnInit() {
  this.http.get('../asset/itemmaster.json').subscribe(data => {
    this.ItemMaster = data; 
    console.log('Item',data)
  });
  
}

cities: City[]; 
inactive:any ;

    selectedCity: City;
    
  onSearh() {
    let pageno = '1';
    if (this.subscription) {
           console.log('UnSubscribe ' );
           this.subscription.unsubscribe ();
    }
     this.subscription = this.myservice.getDatasUniverSal3(this.value1).subscribe(response =>{
     console.log (response)
    })
  }

  onSearhSwitchMap() {
    let pageno = '1';
    this.onSearchDataSwitchMap.next(this.value1) ; 
  }



}