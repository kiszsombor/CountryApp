import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Country } from '../country';
import { MssqlService } from '../mssql.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  rowData: Array<Country> = []

  @Output() 
  selectedRow: Country = new Country();

  constructor(
    private mssqlService: MssqlService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mssqlService.getCountries().subscribe(
      res => {
        // console.log(res);
        this.rowData = res;
      },
      err => console.log(err)
    );
}

  navigateToCountries() {
    this.router.navigate(['/']);
  }

  navigateToRegions() {
    this.router.navigate(['/regions']);
  }

  // Each Column Definition results in one Column.
  columnDefs: ColDef[] = [
    { headerName: 'Országkód', field: 'ctyid' },
    { headerName: 'Ország', field: 'ctyname' },
    // { headerName: 'Régió', field: 'ctyregid' },
    { headerName: 'Régió', field: 'regname' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) 
  agGrid!: AgGridAngular;

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    this.selectedRow = e.data;
    // console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
