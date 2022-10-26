import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '../country';
import { MssqlRegioService } from '../mssql-regio.service';
import { MssqlService } from '../mssql.service';
import { Regio } from '../regio';

@Component({
  selector: 'app-insert-country',
  templateUrl: './insert-country.component.html',
  styleUrls: ['./insert-country.component.css']
})
export class InsertCountryComponent implements OnInit {

  country: Country = new Country;
  regions: Regio[] = [];
  errorMsg = "";

  countryForm = this.fb.group({
    ctyid: ['', [Validators.required, Validators.maxLength(2)]],
    ctyname: ['', [Validators.required, Validators.maxLength(50)]],
    ctyregid: [0, [Validators.required]]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Country,
    public dialogRef: MatDialogRef<InsertCountryComponent>,
    private mssqlService: MssqlService,
    private mssqlRegioService: MssqlRegioService,
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

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    // this.mssqlRegioService.getRegions().subscribe(regions => {this.regions = regions; console.log(this.regions)}, err => {console.log(err)});
    this.mssqlRegioService.getRegions().subscribe(
      reg => {
        this.regions = reg
      }, 
      err => {
        console.log(err)
      });
  }

  async onSubmit() {
    this.country.ctyid = this.countryForm.value.ctyid!;
    this.country.ctyname = this.countryForm.value.ctyname!;
    this.country.ctyregid = this.countryForm.value.ctyregid!;
    this.errorMsg = "";
    // console.log(this.country);
    await this.mssqlService.addCountry(this.country).catch(() => this.errorMsg = "Az országkódnak és az országnévnek egyedinek kell lenni!");
    if(!this.errorMsg) {
      this.dialogRef.close();
    }
  }
}
