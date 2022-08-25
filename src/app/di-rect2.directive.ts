// import { Directive } from '@angular/core';
import {
  Directive,
  Input,
  Output,
  ElementRef,
  HostListener,
  EventEmitter,
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Directive({
  selector: '[appDiRect2]',
})
export class DiRect2Directive {
  @Input() myurlcode = '';
  @Output() appDiRect2 = new EventEmitter();

  constructor(private http: HttpClient, private elementRef: ElementRef) {}
  //window:load 

  @HostListener('input', ['$event']) loadDepartment(event: any) {
    console.log('My URL ', this.myurlcode);
    const inputTextElement: HTMLInputElement = event.target;  
    this.http
      .get<any>(
        'https://www.lovetoshopmall.com/dataservice/service.php?formcode=' +
          this.myurlcode +
          '&payload=' +
          inputTextElement.value
      )
      .subscribe((response) => {
         this.appDiRect2.emit(response)
      }
      );
  } 

}
