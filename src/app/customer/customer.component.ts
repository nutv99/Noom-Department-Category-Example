import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms';
import { MyHttpService } from '../pick.service';
import {customer,customer_PK} from '../model' ;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // Create Output Var From Model
  customerData : customer ;
  customerData_PK : customer_PK  = { "customerid" : '888'};

  //expressions = require("angular-expressions");
  

  //customerData_PK.customerid = '999' ;
  customerid : string = '1' ;

  objForm = {
    firstName: [''],
    lastName: [''],
  } 

  objdepartmentForm = {
    departmentCode: new FormControl('',[Validators.required]),
    departmentDesc: new FormControl('',[Validators.required]),
    faIcon: new FormControl(''),
    imageName: new FormControl(''),
    lang: new FormControl(''),
    lastupdate: new FormControl(''),
    salary: new FormControl(''),
    updatedby: new FormControl(''),
  }

  jobForm = this.fb.group(this.objForm);

  preview: string = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   this.customerData_PK.customerid = '777' ;    


  }

  save() {
    console.log('Save',JSON.stringify(this.jobForm.value)) ;
    this.preview = JSON.stringify(this.jobForm.value);
  }

  SetPK() {
    this.customerData_PK.customerid = '111777' ;    
    this.PKChange2(this.customerData_PK.customerid);
   
  }

  PKChange2(sValue) {
    alert(sValue)
  }

  PKChange(e:any) {
    alert(e.target.value)
  }
}
