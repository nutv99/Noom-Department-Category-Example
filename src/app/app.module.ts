import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyHttpService } from './pick.service';
import { PkDirective } from './pk-directive.directive';
import { TableModule } from 'primeng/table';
import { ItemFormComponent } from './item-form/item-form.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { CustomerComponent } from './customer/customer.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    AutoCompleteModule,

    HttpClientModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    RadioButtonModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    ReactiveFormsModule,
  ],
  providers: [MyHttpService],
  declarations: [
    AppComponent,
    HelloComponent,
    PkDirective,
    ItemFormComponent,
    CustomerComponent,
    ContactusComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
