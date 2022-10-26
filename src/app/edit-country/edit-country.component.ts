import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Country } from '../country';
import { MssqlRegioService } from '../mssql-regio.service';
import { MssqlService } from '../mssql.service';
import { Regio } from '../regio';

export interface EditRowData {
  selectedRow: Country;
}

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  country: Country = new Country;
  regions: Regio[] = [];

  countryForm = this.fb.group({
    ctyid: ['', [Validators.required, Validators.maxLength(2)]],
    ctyname: ['', [Validators.required, Validators.maxLength(50)]],
    ctyregid: [0, [Validators.required]]
  });

  constructor(
    public dialogRef: MatDialogRef<EditCountryComponent>,
    private mssqlService: MssqlService,
    private mssqlRegioService: MssqlRegioService,
    @Inject(MAT_DIALOG_DATA) 
    public data: EditRowData,
    private fb: FormBuilder,
  ) {}

  get ctyid() {
    return this.countryForm.get('ctyid');
  }

  get ctyname() {
    return this.countryForm.get('ctyname');
  }

  get ctyregid() {
    return this.countryForm.get('ctyregid');
  }

  ngOnInit(): void {
    this.countryForm.get('ctyid')?.setValue(this.data.selectedRow.ctyid);
    this.countryForm.get('ctyname')?.setValue(this.data.selectedRow.ctyname);
    this.mssqlRegioService.getRegions().subscribe(
      reg => {
        this.regions = reg
      }, 
      err => {
        console.log(err)
      });
  }

  getRegioName(id: number): string {
    for (const regio of this.regions) {
      if(regio.regid === id) {
        return regio.regname!;
      }
    }
    return "ERROR";
  }

  getRegioId(name: string): number {
    for (const regio of this.regions) {
      if(regio.regname === name) {
        return regio.regid!;
      }
    }
    return -1;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onOkClick(): Promise<void> {
    this.country.ctyid = this.countryForm.value.ctyid!;
    this.country.ctyname = this.countryForm.value.ctyname!;
    this.country.ctyregid = this.getRegioId(this.countryForm.value.ctyregid!.toString());
    await this.mssqlService.updateCountry(this.country).catch(err => console.error(err));
    this.dialogRef.close();
  }
}

