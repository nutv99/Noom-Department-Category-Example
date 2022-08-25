import { Component, OnInit } from '@angular/core';
import {PkDirective} from '../pk-directive.directive' ; 
import {DiRect2Directive} from '../di-rect2.directive' ; 
                
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
resultShow : City[] ;
department: City[];
sText:string ;
  constructor() { }

  ngOnInit() {
  }

  setText() {
    this.sText = 'ttt'
  }

}