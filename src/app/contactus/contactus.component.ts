import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PkDirective } from '../pk-directive.directive';
import { DiRect2Directive } from '../di-rect2.directive';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})

export class ContactusComponent implements  AfterViewInit {
  resultShow: City[];
  resultShow2: City[];
  department: City[];
  sText: string;
  sText2: string;

  constructor() {}

  ngOnInit() {
    
  } 
  ngAfterViewInit() {
    let element: HTMLElement = document.getElementById('mText2') as HTMLElement;
    element.click();
  }

  setText() {
    this.sText = 'ttt';
  }
}
