import { Directive ,Input,Output,ElementRef,HostListener, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Directive({
  selector: '[appPkDirective]'
})
export class PkDirective {
@Input() url : string;
@Output() appPkDirective = new EventEmitter()

  constructor(private http:HttpClient,private elementRef: ElementRef) {
    
  }
  @HostListener('input',['$event']) loadDepartment(event:any) {    
    console.log(this.url) ;
    const inputTextElement :HTMLInputElement = event.target ;  
    this.http.get<any>('https://www.anapioficeandfire.com/api/books?name='+ inputTextElement.value)
    .subscribe(response => this.appPkDirective.emit(response)) ;
    
  }

}