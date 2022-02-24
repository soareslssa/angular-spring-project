import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


// Modulo criado para organizar os imports do Material do projeto

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule]
})
export class AppMaterialModule { }
