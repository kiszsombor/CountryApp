import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { MssqlRegioService } from '../mssql-regio.service';
import { MssqlService } from '../mssql.service';
import { Regio } from '../regio';

@Component({
  selector: 'app-region-table',
  templateUrl: './region-table.component.html',
  styleUrls: ['./region-table.component.css']
})
export class RegionTableComponent implements OnInit {

  rowData: Array<Regio> = [];

  @Output() selectedRow: Regio = new Regio();

  @ViewChild(AgGridAngular) 
  agGrid!: AgGridAngular;

  constructor(
    private mssqlService: MssqlService,
    private mssqlRegioService: MssqlRegioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mssqlRegioService.getRegions().subscribe(
      res => {
        // console.log(res);
        this.rowData = res;
      },
      err => console.log(err)
    );
  }

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  columnDefs: ColDef[] = [
    { headerName: 'Régió id', field: 'regid' },
    { headerName: 'Régiónév', field: 'regname' },
  ];

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  onCellClicked( e: CellClickedEvent): void {
    this.selectedRow = e.data;
    // console.log('cellClicked', e.data);
  }
}
