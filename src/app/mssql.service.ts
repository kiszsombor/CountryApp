import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

const api = 'https://localhost:44390/api/country';

@Injectable({
  providedIn: 'root'
})
export class MssqlService {

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(`${api}/countries`);
  }

  getCountriesFiltered(name : string) {
    return this.http.get<Country[]>(`${api}/filter/${name}`);
  }


  deleteCountry(country: Country): Promise<Object | undefined> {
    return this.http.delete(`${api}/del/${country.ctyid}`).toPromise();
  }

  /*
  deleteCountrys(country: Country[]) {
    return this.http.delete(`${api}/del/${country.ctyid}`);
  }
  */

  addCountry(country: Country): Promise<Country | undefined> {
    return this.http.post<Country>(
      `${api}/add`,
      country!,
    ).toPromise();
  }

  updateCountry(country: Country): Promise<Country | undefined> {
    return this.http.put<Country>(`${api}/${country.ctyid}`, country).toPromise();
  }

}
