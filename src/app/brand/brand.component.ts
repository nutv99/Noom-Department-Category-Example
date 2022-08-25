import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';



export interface BrandModel {
  id: number;
  itembrand_name_th: string;
  itembrand_name_en: string;
}

@Component({
  selector: 'app-frm-pro-brand-add',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class FrmProBrandAddComponent implements OnInit {
  sForm!: FormGroup;
  results: any;
  sData: any;
  errorMessage!: string;
  dataSend: string = '';
  id: number = 0;
  dataResult: any;
  dataResult2: any;
  BrandData = {} as BrandModel;
  BrandInfo!: BrandModel;

  constructor(
    private location: Location,
    private http: HttpClient,
    private fb: FormBuilder,

    
  ) {}

  ngOnInit(): void {
    
    // this.sForm = this.fb.group({
    //   id: new FormControl(this.id, Validators.required),
    //   itembrand_name_th: new FormControl('', Validators.required),
    //   itembrand_name_en: new FormControl('', Validators.required),
    // });
    // alert(this.id);
    

    this.sForm = this.fb.group({
      itembrand_name_th: new FormControl('', Validators.required),
      itembrand_name_en: new FormControl('', Validators.required),
    });
  }

  back(): void {
    this.location.back();
  }

  onSubmit() {}

   
}
