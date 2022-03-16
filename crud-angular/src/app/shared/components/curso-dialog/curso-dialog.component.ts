import { Curso } from './../../../cursos/cursos/model/curso';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent implements OnInit {

  element!: Curso;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Curso) {
    this.element = data;
    }

  ngOnInit(): void {
  }

  addCurso(nome: string, categoria: string){

  }

   /* onCancel(): void {
    this.dialogRef.close();
  }  */



}
