import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MssqlRegioService } from '../mssql-regio.service';
import { Regio } from '../regio';

@Component({
  selector: 'app-insert-regio',
  templateUrl: './insert-regio.component.html',
  styleUrls: ['./insert-regio.component.css']
})
export class InsertRegioComponent implements OnInit {

  regio: Regio = new Regio;

  regioForm = this.fb.group({
    regname: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Regio,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InsertRegioComponent>,
    private mssqlRegioService: MssqlRegioService,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    this.regio.regname = this.regioForm.value.regname!;
    console.log(this.regio);
    await this.mssqlRegioService.addRegion(this.regio).catch(err => console.log(err));
    this.dialogRef.close();
  }

}
