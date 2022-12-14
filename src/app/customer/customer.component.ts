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

import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { ListboxFilterOptions } from 'primeng/listbox';

import { Subject, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  // Create Output Var From Model
  customerData: customer;
  customerData_PK: customer_PK = { customerid: '888' };
  departmentData: any;
  selectdepartmentCode: string;

  resultShow: any;
  AresultShow: any = {};

  //expressions = require("angular-expressions");

  //customerData_PK.customerid = '999' ;
  customerid: string = '1';
  isLoading: any;

  cities: City[];
  selectedCity1: City;

  department: City[];
  category: City[];
  groupItem: City[];

  selectedDepartment: City;
  selectedCategory: City;
  selectedgroupItem: City;

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

  jobForm = this.fb.group({
    departmentCode: new FormControl('', [Validators.required]),
    categoryCode: new FormControl('', [Validators.required]),
    groupCode: new FormControl('', [Validators.required]),
  });

  preview: string = '';
  constructor(private fb: FormBuilder, private myservice: MyHttpService) {
    // this.department = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' },
    // ];
  }

  ngOnInit() {
    this.customerData_PK.customerid = '777';

    this.jobForm.statusChanges.subscribe((x) => {
      //alert(x);
    });

    this.myservice
      .getAlls('department')
      .pipe(
        finalize(() => {
          this.isLoading = false;
          // alert('Yes');
        })
      )
      .subscribe({
        next: (data) => {
          this.department = data;
        },
        error: (e) => {
          alert('Error while loading the data');
        },
        complete: () => console.log('done'),
      });
  }

  getCategory() {
     //alert(this.selectedCity1);
    let params = 'parentcode=' + this.selectedCity1;
    this.myservice
      .getByCondition('category', params)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          // alert('Yes');
        })
      )
      .subscribe({
        next: (data) => {
          this.category = data;
        },
        error: (e) => {
          alert('Error while loading the data');
        },
        complete: () => console.log('done'),
      });
  }

  getgroupItem() {
    //alert(this.selectedCity1);
   let params = 'parentcode=' + this.selectedCategory;
   this.myservice
     .getByCondition('groupItem', params)
     .pipe(
       finalize(() => {
         this.isLoading = false;
         // alert('Yes');
       })
     )
     .subscribe({
       next: (data) => {
         this.groupItem = data;
       },
       error: (e) => {
         alert('Error while loading the data');
       },
       complete: () => console.log('done'),
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
