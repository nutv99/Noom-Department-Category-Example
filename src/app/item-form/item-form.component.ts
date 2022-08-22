import { Component, OnInit } from '@angular/core';
import { MyHttpService} from '../pick.service' ;
import { Subscription,Subject, switchMap, debounceTime,pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';

interface City {
  name: string,
  code: string,
  
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
value1:string = '';
subscription?: Subscription;
ItemMaster?:  any ; 
Data1  :any ;
Data2  :any ; 

cities: City[];
selectedCity1: City;
selectedCity2: City;
selectedCity3: string;
selectedCountry : string = '';
countries: any[];
groupedCities: SelectItemGroup[];
items: SelectItem[];
item: string;


TableList : string[] = ['ItemMaster','department'] ;



onSearchDataSwitchMap = new Subject<string>();


constructor() {
  this.items = [];
  for (let i = 0; i < 10000; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
  }

  this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.groupedCities = [
      {
          label: 'Germany', value: 'de', 
          items: [
              {label: 'Berlin', value: 'Berlin'},
              {label: 'Frankfurt', value: 'Frankfurt'},
              {label: 'Hamburg', value: 'Hamburg'},
              {label: 'Munich', value: 'Munich'}
          ]
      },
      {
          label: 'USA', value: 'us', 
          items: [
              {label: 'Chicago', value: 'Chicago'},
              {label: 'Los Angeles', value: 'Los Angeles'},
              {label: 'New York', value: 'New York'},
              {label: 'San Francisco', value: 'San Francisco'}
          ]
      },
      {
          label: 'Japan', value: 'jp', 
          items: [
              {label: 'Kyoto', value: 'Kyoto'},
              {label: 'Osaka', value: 'Osaka'},
              {label: 'Tokyo', value: 'Tokyo'},
              {label: 'Yokohama', value: 'Yokohama'}
          ]
      }
  ];

  this.countries = [
      {cname: 'Australia', code: 'AU'},
      {cname: 'Brazil', code: 'BR'},
      {cname: 'China', code: 'CN'},
      {cname: 'Egypt', code: 'EG'},
      {cname: 'France', code: 'FR'},
      {cname: 'Germany', code: 'DE'},
      {cname: 'India', code: 'IN'},
      {cname: 'Japan', code: 'JP'},
      {cname: 'Spain', code: 'ES'},
      {cname: 'United States', code: 'US'}
  ];
}

 

ngOnInit() {
//   this.Data1 = this.myservice.getDatasUniverSal2(this.TableList[0]).subscribe(response =>{
//      this.Data1 = response ;
//   })
//   // console.log('Data1',Data1) ;
//   this.Data2 = this.myservice.getDatasUniverSal2(this.TableList[1]).subscribe(response =>{
//     this.Data2 = response ;
//  })
  
  
}





    
  // onSearh() {
  //   let pageno = '1';
  //   if (this.subscription) {
  //          console.log('UnSubscribe ' );
  //          this.subscription.unsubscribe ();
  //   }
  //    this.subscription = this.myservice.getDatasUniverSal3(this.value1).subscribe(response =>{
  //    console.log (response)
  //   })
  // }

  // onSearhSwitchMap() {
  //   let pageno = '1';
  //   this.onSearchDataSwitchMap.next(this.value1) ; 
  // }



}