import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgIf, NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SecondaryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgIf, 
    NgFor,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
