import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Regio } from './regio';

const api = 'https://localhost:44390/api/regio';

@Injectable({
  providedIn: 'root'
})
export class MssqlRegioService {

  constructor(private http: HttpClient) {}

  getRegions() {
    return this.http.get<Regio[]>(`${api}/regions`);
  }

  deleteRegion(regio: Regio): Promise<Object | undefined> {
    return this.http.delete(`${api}/del/${regio.regid}`).toPromise();
  }

  addRegion(regio: Regio): Promise<Regio | undefined> {
    return this.http.post<Regio>(`${api}/add`, regio).toPromise();
  }

  updateRegion(regio: Regio): Promise<Regio | undefined> {
    return this.http.put<Regio>(`${api}/${regio.regid}`, regio).toPromise();
  }
}
