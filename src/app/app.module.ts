import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InsertCountryComponent } from './insert-country/insert-country.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatSelectModule, } from '@angular/material/select';
import { DeleteCountryComponent } from './delete-country/delete-country.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionTableComponent } from './region-table/region-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountryTableComponent } from './country-table/country-table.component';
import { InsertRegioComponent } from './insert-regio/insert-regio.component';
import { EditRegioComponent } from './edit-regio/edit-regio.component';
import { DeleteRegioComponent } from './delete-regio/delete-regio.component'; 
import { MatTooltipModule } from '@angular/material/tooltip';
import { FilterCountryComponent } from './filter-country/filter-country.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCountryComponent,
    InsertCountryComponent,
    DialogComponent,
    DeleteCountryComponent,
    RegionTableComponent,
    CountryTableComponent,
    InsertRegioComponent,
    EditRegioComponent,
    DeleteRegioComponent,
    FilterCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
