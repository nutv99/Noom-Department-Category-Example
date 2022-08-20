import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MyHttpService} from './pick.service' ;
import {PkDirective} from './pk-directive.directive' ;
import {TableModule} from 'primeng/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,TableModule],
  providers: [MyHttpService],
  declarations: [ AppComponent, HelloComponent,PkDirective],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
