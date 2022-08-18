import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  groupData: string[] = [];

  departmentName : string = '' ;
  categoryName : string = '' ;
  groupName : string = '' ; 

  resultShow : any = '' ;

  constructor(private http: HttpClient) {}

  name = 'Angular ' + VERSION.major;

  searchCategory() {
    //alert(this.departmentName)
    console.clear();
    //alert(this.departmentName)
    this.categoryData = ['A1', 'A2'];
    const url = 'https://lovetoshopmall.com/testcors.php?departmentcode='+this.departmentName;
    this.http.get<any>(url).subscribe( response => {
      console.log(response)
      this.resultShow = response ;
      this.categoryData = response ;

    })
  }

  searchGroup() {
    //alert(this.categoryName)
    this.groupData = ['A1111', 'A2222'];
    const url = 'https://lovetoshopmall.com/testcors.php?Name=?departmentName='+this.departmentName;
    this.http.post(url,this.categoryName).subscribe(response =>{
      console.log(response)
    })
  }
}
