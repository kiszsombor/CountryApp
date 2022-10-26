import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '../country';
import { MssqlService } from '../mssql.service';

export interface DeleteRowData {
  selectedRow: Country;
}

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrls: ['./delete-country.component.css']
})
export class DeleteCountryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCountryComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DeleteRowData,
    private mssqlService: MssqlService
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.mssqlService.deleteCountry(this.data.selectedRow).catch(err => console.error(err));
    this.dialogRef.close();
  }

}