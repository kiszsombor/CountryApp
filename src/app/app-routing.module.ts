import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { FilterCountryComponent } from './filter-country/filter-country.component';
import { RegionTableComponent } from './region-table/region-table.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'regions',
    component: RegionTableComponent
  },
  {
    path: 'country',
    component: CountryTableComponent
  },
  {
    path: 'filter',
    component: FilterCountryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
