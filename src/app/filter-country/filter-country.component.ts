import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent, GridApi, GetQuickFilterTextParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Country } from '../country';
import { MssqlService } from '../mssql.service';

@Component({
  selector: 'app-filter-country',
  templateUrl: './filter-country.component.html',
  styleUrls: ['./filter-country.component.css']
})
export class FilterCountryComponent implements OnInit {

  rowData: Array<Country> = [];

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
    { headerName: 'Régió', field: 'regname' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,

    getQuickFilterText: (params: GetQuickFilterTextParams) =>  {
      // Return empty string to ignore filter string  
      return params.colDef.hide ? '' : params.value;            
    }
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) 
  agGrid!: AgGridAngular;

  private gridApi!: GridApi;

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  onFilterTextBoxChanged() {
    
    this.mssqlService.getCountriesFiltered((document.getElementById('filter-text-box') as HTMLInputElement).value).subscribe(
      res => {
        this.rowData = res
      },
      err => console.log(err)
    );
    // this.gridApi.setQuickFilter((document.getElementById('filter-text-box') as HTMLInputElement).value);
  }

  onPrintQuickFilterTexts() {

    this.gridApi.forEachNode(function (rowNode, index) {
      console.log('Row ' + index + ' quick filter text is ' + rowNode.quickFilterAggregateText);
    });
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

