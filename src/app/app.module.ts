import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';



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
    FormsModule,
    MatChipsModule,
    NgFor,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
