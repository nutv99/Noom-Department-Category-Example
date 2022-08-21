import { Component, OnInit } from '@angular/core';
import { MyHttpService} from '../pick.service' ;
import { Subscription,Subject, switchMap, debounceTime,pipe } from 'rxjs';


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

onSearchDataSwitchMap = new Subject<string>();


constructor(private myservice:MyHttpService) {

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