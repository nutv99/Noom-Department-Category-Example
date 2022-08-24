import { Component, OnInit } from '@angular/core';

import { MyHttpService } from '../pick.service';
import { customer, customer_PK } from '../model';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { Subject, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // Create Output Var From Model
  customerData: customer;
  customerData_PK: customer_PK = { customerid: '888' };

  resultShow: any;
  AresultShow: any = {};

  //expressions = require("angular-expressions");

  //customerData_PK.customerid = '999' ;
  customerid: string = '1';
  isLoading: any;

  objForm = {
    firstName: [''],
    lastName: [''],
  };

  objdepartmentForm = {
    departmentCode: new FormControl('', [Validators.required]),
    departmentDesc: new FormControl('', [Validators.required]),
    faIcon: new FormControl(''),
    imageName: new FormControl(''),
    lang: new FormControl(''),
    lastupdate: new FormControl(''),
    salary: new FormControl(''),
    updatedby: new FormControl(''),
  };

  // form_ItemMaster = {
  //   Balance : ['' ],
  //   BalanceStock : ['' ],
  //   BrandID : ['' ],
  //   categoryCode : ['' ,[Validators.required]],
  //   departmentCode : ['' ,[Validators.required]],
  //   Description : ['' ],
  //   Description2 : ['' ],
  //   discount : ['' ],
  //   fullPrice : ['' ],
  //   groupcode : ['' ],
  //   ImageListBig : ['' ],
  //   ImageListThumbA : ['' ],
  //   ImageListThumbB : ['' ],
  //   isWork : ['' ,[Validators.required]],
  //   ItemCode : ['' ,[Validators.required]],
  //   ItemName : ['' ],
  //   ItemNameShort : ['' ],
  //   ItemNameURL : ['' ],
  //   ItemShopCode : ['' ],
  //   ItemShopURL : ['' ,[Validators.required]],
  //   lastupdate : ['' ],
  //   mainImageURL : ['' ],
  //   numReview : ['' ],
  //   NumSale : ['' ],
  //   numView : ['' ],
  //   pageDetailURL : ['' ],
  //   pageMetaDesc : ['' ],
  //   pageTitle : ['' ],
  //   rating : ['' ],
  //   SellPrice : ['' ],
  //   shipCode : ['' ],
  //   shipFeePerPiece : ['' ],
  //   ShopCode : ['' ,[Validators.required]],
  //   subImageURL : ['' ],
  //   }

  jobForm = this.fb.group({
    categoryCode: new FormControl('', [Validators.required]),
  });

  form_ItemMaster = this.fb.group({
    Balance: new FormControl(null),
    BalanceStock: new FormControl(null),
    BrandID: new FormControl(null),
    categoryCode: new FormControl(null, [Validators.required]),
    departmentCode: new FormControl(null, [Validators.required]),
    Description: new FormControl(null),
    Description2: new FormControl(null),
    discount: new FormControl(null),
    fullPrice: new FormControl(null),
    groupcode: new FormControl(null),
    ImageListBig: new FormControl(null),
    ImageListThumbA: new FormControl(null),
    ImageListThumbB: new FormControl(null),
    isWork: new FormControl(null, [Validators.required]),
    ItemCode: new FormControl(null, [Validators.required]),
    ItemName: new FormControl(null),
    ItemNameShort: new FormControl(null),
    ItemNameURL: new FormControl(null),
    ItemShopCode: new FormControl(null),
    ItemShopURL: new FormControl(null, [Validators.required]),
    lastupdate: new FormControl(null),
    mainImageURL: new FormControl(null),
    numReview: new FormControl(null),
    NumSale: new FormControl(null),
    numView: new FormControl(null),
    pageDetailURL: new FormControl(null),
    pageMetaDesc: new FormControl(null),
    pageTitle: new FormControl(null),
    rating: new FormControl(null),
    SellPrice: new FormControl(null),
    shipCode: new FormControl(null),
    shipFeePerPiece: new FormControl(null),
    ShopCode: new FormControl(null, [Validators.required]),
    subImageURL: new FormControl(null),
  });

  preview: string = '';
  constructor(private fb: FormBuilder, private myservice: MyHttpService) {}

  ngOnInit() {
    this.customerData_PK.customerid = '777';

    this.jobForm.statusChanges.subscribe((x) => {
      //alert(x);
    });
  }

  async getDataA(tablename: string) {
    this.AresultShow = {};
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
  onSubmit() {
    alert('Save');
  }
  save() {
    console.log('Save', JSON.stringify(this.jobForm.value));
    this.preview = JSON.stringify(this.jobForm.value);
  }

  SetPK() {
    this.customerData_PK.customerid = '111777';
    // this.PKChange2(this.customerData_PK.customerid);
  }

  PKChange2(sValue) {
    alert(sValue);
  }

  PKChange(e: any) {
    alert(e.target.value);
  }
}
