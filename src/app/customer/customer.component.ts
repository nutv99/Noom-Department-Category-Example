import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators  } from '@angular/forms';
import {AbstractControl } from '@angular/forms';
import { MyHttpService } from '../pick.service';
import {customer,customer_PK} from '../model' ;

import { Subject, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // Create Output Var From Model
  customerData : customer ;
  customerData_PK : customer_PK  = { "customerid" : '888'}; 

  resultShow:any ;
  AresultShow:any = {};

  //expressions = require("angular-expressions");
  

  //customerData_PK.customerid = '999' ;
  customerid : string = '1' ; 
  isLoading :any ;

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

  form_ItemMaster = { 
    Balance : ['' ],
    BalanceStock : ['' ],
    BrandID : ['' ],
    categoryCode : ['' ,[Validators.required]],
    departmentCode : ['' ,[Validators.required]],
    Description : ['' ],
    Description2 : ['' ],
    discount : ['' ],
    fullPrice : ['' ],
    groupcode : ['' ],
    ImageListBig : ['' ],
    ImageListThumbA : ['' ],
    ImageListThumbB : ['' ],
    isWork : ['' ,[Validators.required]],
    ItemCode : ['' ,[Validators.required]],
    ItemName : ['' ],
    ItemNameShort : ['' ],
    ItemNameURL : ['' ],
    ItemShopCode : ['' ],
    ItemShopURL : ['' ,[Validators.required]],
    lastupdate : ['' ],
    mainImageURL : ['' ],
    numReview : ['' ],
    NumSale : ['' ],
    numView : ['' ],
    pageDetailURL : ['' ],
    pageMetaDesc : ['' ],
    pageTitle : ['' ],
    rating : ['' ],
    SellPrice : ['' ],
    shipCode : ['' ],
    shipFeePerPiece : ['' ],
    ShopCode : ['' ,[Validators.required]],
    subImageURL : ['' ],
    }
       

  jobForm = this.fb.group(this.form_ItemMaster);

  preview: string = '';
  constructor(private fb: FormBuilder,private myservice:MyHttpService) {}

  ngOnInit() {
   this.customerData_PK.customerid = '777' ;    

   this.jobForm.statusChanges.subscribe(x => {
    alert(x);
  })


  }

  

  async getDataA(tablename:string) {
    this.AresultShow = {} ;
    this.AresultShow = await this.myservice.getDatasUniverSal(tablename);
    console.log('DataLoad By Init1', this.AresultShow);
  }

//  getDataDepartment900() {
//    this.myservice.getAllDepartment('department')
//    .pipe(
//     finalize(() => {
//       this.isLoading = false;
//       alert('Yes') ;
//     })
//    )
//    .subscribe({
//     next: (data) => {
//       this.AresultShow = data;
//     },
//     error: (e) => {      
//       alert('Error while loading the product data');
//     } ,
//     complete: () => console.log('done')
//   })
//  } 

//  getDataDepartment999() {
//   this.myservice.getAllDepartment('department')   
//   .subscribe({
//    next: (data) => {
//      this.AresultShow = data;
//    },
//    error: (e) => {      
//      alert('Error while loading the product data');
//    } ,
//    complete: () => console.log('done')
//  })
// } 


  save() {
    console.log('Save',JSON.stringify(this.jobForm.value)) ;
    this.preview = JSON.stringify(this.jobForm.value);
  }

  SetPK() {
    this.customerData_PK.customerid = '111777' ;    
   // this.PKChange2(this.customerData_PK.customerid);
   
  }

  PKChange2(sValue) {
    alert(sValue)
  }

  PKChange(e:any) {
    alert(e.target.value)
  }
}
