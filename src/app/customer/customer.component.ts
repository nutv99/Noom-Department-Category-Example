import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  jobForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  })
  preview: string = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }

}