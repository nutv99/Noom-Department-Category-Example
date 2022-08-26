import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PkDirective } from '../pk-directive.directive';
import { DiRect2Directive } from '../di-rect2.directive';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements AfterViewInit {
  resultShow: City[];
  resultShow2: City[];
  department: City[];
  sText: string;
  sText2: string;
  isLoading: boolean = false;

  // const series1$ = of('a', 'b');

  constructor() {}

  ngOnInit() {
    // $.getScript('../js/myjsfile.js');
    let d = of(1, 2, 3, 4).pipe(
      filter((x) => x % 2 === 0),
      map((x) => x + x)
    );

    d.subscribe((x) => console.log('x-rx=', x));
  }
  ngAfterViewInit() {
    let element: HTMLElement = document.getElementById('mText2') as HTMLElement;
    element.click();
  }

  setText() {
    this.sText = 'ttt';
  }

  StopWating() {
    this.isLoading = false;    
  }

  setisLoading() {
    this.isLoading = true;
    // const myTimeout = setTimeout(this.StopWating, 2000);
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.isLoading = false;
   }, 3000);
    
  }
}
