import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../country';
import { DeleteCountryComponent } from '../delete-country/delete-country.component';
import { DeleteRegioComponent } from '../delete-regio/delete-regio.component';
import { EditCountryComponent } from '../edit-country/edit-country.component';
import { EditRegioComponent } from '../edit-regio/edit-regio.component';
import { InsertCountryComponent } from '../insert-country/insert-country.component';
import { InsertRegioComponent } from '../insert-regio/insert-regio.component';
import { Regio } from '../regio';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input()
  selectedRow!: Country;

  @Input()
  selectedRegioRow!: Regio;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openInsertDialog(): void {

    if (this.selectedRow) {
      const dialogRef = this.dialog.open(InsertCountryComponent, {
        width: '250px',
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    } else if (this.selectedRegioRow) {
      const dialogRef = this.dialog.open(InsertRegioComponent, {
        width: '250px',
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    }
    
  }

  openEditDialog(): void {
    
    if (this.selectedRow) {
      const dialogRef = this.dialog.open(EditCountryComponent, {
        width: '250px',
        data: {selectedRow: this.selectedRow},
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    } else if (this.selectedRegioRow) {
      const dialogRef = this.dialog.open(EditRegioComponent, {
        width: '250px',
        data: {selectedRow: this.selectedRegioRow},
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    }
    
  }

  openDeleteDialog(): void {
    
    if (this.selectedRow) {
      const dialogRef = this.dialog.open(DeleteCountryComponent, {
        width: '250px',
        data: {selectedRow: this.selectedRow},
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    } else if (this.selectedRegioRow) {
      const dialogRef = this.dialog.open(DeleteRegioComponent, {
        width: '250px',
        data: {selectedRow: this.selectedRegioRow},
      });
      
      dialogRef.afterClosed().subscribe(() => {
        window.location.reload();
      });
    }

    
  }
}
