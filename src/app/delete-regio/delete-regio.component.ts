import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteCountryComponent } from '../delete-country/delete-country.component';
import { MssqlRegioService } from '../mssql-regio.service';
import { Regio } from '../regio';

export interface DeleteRowData {
  selectedRow: Regio;
}

@Component({
  selector: 'app-delete-regio',
  templateUrl: './delete-regio.component.html',
  styleUrls: ['./delete-regio.component.css']
})
export class DeleteRegioComponent implements OnInit {

  errorMsg: string = "";
  err = false;

  constructor(
    public dialogRef: MatDialogRef<DeleteCountryComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DeleteRowData,
    private mssqlRegioService: MssqlRegioService
  ) { }

  ngOnInit(): void {
    // console.log(this.data.selectedRow)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onOkClick(): Promise<void> {
    await this.mssqlRegioService.deleteRegion(this.data.selectedRow).catch(() => {this.errorMsg = "Az régió nem törölhető, mivel van még ország a régióban!"; this.err = true;});

    if(!this.err){
      this.dialogRef.close();
    }
  }
}
