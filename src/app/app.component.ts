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
  departmentData: string[] = ['A', 'B', 'C'];
  categoryData: string[] = [];
  groupData: string[] = [];

  departmentName : string = '' ;
  categoryName : string = '' ;
  groupName : string = '' ;

  constructor(private http: HttpClient) {}

  name = 'Angular ' + VERSION.major;

  searchCategory() {
    //alert(this.departmentName)
    this.categoryData = ['A1', 'A2'];
    const url = 'https://lovetoshopmall.com/dataservice/category.php?departmentName='+this.departmentName;
    this.http.get<any>(url).subscribe( response => {
      console.log(response)

    })
  }

  searchGroup() {
    //alert(this.categoryName)
    this.groupData = ['A1111', 'A2222'];
    const url = 'https://lovetoshopmall.com/dataservice/category.php?departmentName='+this.departmentName;
    this.http.post(url,this.categoryName).subscribe(response =>{
      console.log(response)
    })
  }
}
