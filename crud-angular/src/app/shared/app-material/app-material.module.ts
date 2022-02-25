import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// Modulo criado para organizar os imports do Material do projeto

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule]
})
export class AppMaterialModule { }
