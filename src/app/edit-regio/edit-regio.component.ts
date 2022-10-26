import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InsertRegioComponent } from '../insert-regio/insert-regio.component';
import { MssqlRegioService } from '../mssql-regio.service';
import { Regio } from '../regio';

export interface EditRowData {
  selectedRow: Regio;
}

@Component({
  selector: 'app-edit-regio',
  templateUrl: './edit-regio.component.html',
  styleUrls: ['./edit-regio.component.css']
})
export class EditRegioComponent implements OnInit {

  regio: Regio = new Regio;
  regions: Regio[] = [];
  errorMsg = "";

  regioForm = this.fb.group({
    regid: [0, [Validators.required, Validators.maxLength(2)]],
    regname: ['', [Validators.required, Validators.maxLength(50)]]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: EditRowData,
    public dialogRef: MatDialogRef<InsertRegioComponent>,
    private fb: FormBuilder,
    private mssqlRegioService: MssqlRegioService
  ) { }

  ngOnInit(): void {

    this.regioForm.get('regid')?.setValue(this.data.selectedRow.regid);
    this.regioForm.get('regname')?.setValue(this.data.selectedRow.regname);
    this.mssqlRegioService.getRegions().subscribe(
      reg => {
        this.regions = reg
      }, 
      err => {
        console.log(err)
      });
  }

  get regid() {
    return this.regioForm.get('regid');
  }

  get regname() {
    return this.regioForm.get('regname');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onOkClick() {
    this.regio.regid = this.regioForm.value.regid!;
    this.regio.regname = this.regioForm.value.regname!;
    this.errorMsg = "";

    await this.mssqlRegioService.updateRegion(this.regio).catch(() => this.errorMsg = "Az országkódnak és az országnévnek egyedinek kell lenni!");
    
    if(!this.errorMsg) {
      this.dialogRef.close();
    }
  }

}


