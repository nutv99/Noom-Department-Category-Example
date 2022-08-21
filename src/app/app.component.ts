import { Component, OnInit, VERSION } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {TableModule} from 'primeng/table';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

import { User, UserInformation } from './user';
import { MyHttpService } from './pick.service';
import { categorymaster, categorymaster_PK , department} from './model';
import { ItemFormComponent } from './item-form/item-form.component' ;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Car {
  year: number;
  brand: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categoryModel: categorymaster;
  categoryModelPK: categorymaster_PK ;

  TableList : string[]  = ['ItemMaster','Department','Category','GroupItem'] ;

  departmentDataA : department ;

  cars: Car[] = [
    { year: 1999, brand: 'toyota' },
    { year: 2000, brand: 'Honda' },
    { year: 2001, brand: 'toyota' },
  ];
  //cars = [{ year: 1999 , brand : 'toyota' }]

  departmentData = [
    { categorycode: 'A1', categoryDesc: 'นาฬิกาผู้หญิง' },
    { categorycode: 'A2', categoryDesc: 'นาฬิกาผู้ชาย' },
  ];

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  categoryData = [];
  groupData = [];

  departmentName: string = '';
  categoryName: string = '';
  groupName: string = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  userObj: User;

  resultShow: any = '';

  constructor(
    public myservice: MyHttpService,
    private http: HttpClient,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    // this.resultShow = this.myservice.getDatasUniverSal('a001') ;
    // console.log('DataLoad' ,this.resultShow ) ;
    this.getInit();
  }

  name = 'Angular ' + VERSION.major;

  async getInit() {
    this.resultShow = await this.myservice.getDatasUniverSal('a001');
    console.log('DataLoad By Init1', this.resultShow);
  }

  getIni2() {
    this.resultShow = this.myservice
      .getDatasUniverSal2('a001')
      .subscribe((response: any) => {
        this.resultShow = response;
        console.log('DataLoad', this.resultShow);
      });
  }

  searchCategory() {
    //alert(this.departmentName)
    console.clear();
    //alert(this.departmentName)
    this.categoryData = ['A1', 'A2'];
    const url =
      'https://lovetoshopmall.com/testcors.php?departmentcode=' +
      this.departmentName;
    this.http.get<any>(url).subscribe((response) => {
      console.log(response);
      this.resultShow = response;
      this.categoryData = response;
    });
  }

  searchGroup() {
    //alert(this.categoryName)
    this.groupData = ['A1111', 'A2222'];
    const url =
      'https://lovetoshopmall.com/testcors.php?categoryCode=' +
      this.categoryName;
    this.http.get<any>(url).subscribe((response) => {
      this.groupData = response;
      console.log('Group Data', response);
    });
  }

  searchByCategoryName() {
    const url2 =
      'https://lovetoshopmall.com/testcors.php?categoryCode=' +
      this.categoryName;
    this.myservice.getDatas().subscribe((response) => {});
  }

  saveDataToDB() {
    const url2 =
      'https://lovetoshopmall.com/testcors.php?categoryCode=' +
      this.categoryName;
    this.myservice
      .InsertDatas(this.categoryData)
      .subscribe((response: any) => {});
  }

  testSearch() {
    this.myservice.search('K');
  }

  // loadDepartment(event : any) {
  //   const inputTextElement :HTMLInputElement = event.target ;
  //   console.log(inputTextElement.value);
  //   this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+ inputTextElement.value).subscribe(response => this.resultShow = response) ;
  //   // this.http.get<any>('https://www.anapioficeandfire.com/api/books').subscribe(response => this.resultShow = response) ;

  //   //A Game of Thrones

  // }
}
