import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  

  //customerData_PK.customerid = '999' ;
  customerid : string = '1' ;


  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  preview: string = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   this.customerData_PK.customerid = '777' ;    


  }

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }

  SetPK() {
    this.customerData_PK.customerid = '111777' ;    
    this.PKChange2(this.customerData_PK.customerid)
  }

  PKChange2(sValue) {
    alert(sValue)
  }

  PKChange(e:any) {
    alert(e.target.value)
  }
}