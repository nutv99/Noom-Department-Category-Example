import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpserviceService } from './httpservice.service' ;
import { User,UserInformation} from './user'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  departmentData  = [
  { categorycode: 'A1', categoryDesc: 'นาฬิกาผู้หญิง'},
  { categorycode: 'A2', categoryDesc: 'นาฬิกาผู้ชาย'}  
 ]
  categoryData   = [];
  groupData = [];

  departmentName : string = '' ;
  categoryName : string = '' ;
  groupName : string = '' ; 

  userObj : User  ;

  resultShow : any = '' ;

  constructor(private myservice:HttpserviceService) {}

  name = 'Angular ' + VERSION.major;

  searchCategory() {
    //alert(this.departmentName)
    console.clear();
    //alert(this.departmentName)
    this.categoryData = ['A1', 'A2'];
    // const url = 'https://lovetoshopmall.com/testcors.php?departmentcode='+this.departmentName;
    // this.http.get<any>(url).subscribe( response => {
    //   console.log(response)
    //   this.resultShow = response ;
    //   this.categoryData = response ;

    // })
  }

  searchGroup() {
    //alert(this.categoryName)
    this.groupData = ['A1111', 'A2222'];
    // const url = 'https://lovetoshopmall.com/testcors.php?categoryCode='+this.categoryName;
    // this.http.get<any>(url).subscribe(response =>{
      
    //   this.groupData = response ;
    //   console.log('Group Data',response)
    // })
  }

  searchByCategoryName() {
    const url2 = 'https://lovetoshopmall.com/testcors.php?categoryCode='+this.categoryName;
    this.myservice.getDatas().subscribe( response=> {
      
    })
  }

  saveDataToDB () {

    const url2 = 'https://lovetoshopmall.com/testcors.php?categoryCode='+this.categoryName;
    this.myservice.InsertDatas(this.categoryData).subscribe((response:any)=>{
       
  }) ;
   
}
}
