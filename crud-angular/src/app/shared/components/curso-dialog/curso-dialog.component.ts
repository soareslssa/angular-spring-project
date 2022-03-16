import { CursosService } from './../../../cursos/services/cursos.service';
import { Curso } from './../../../cursos/cursos/model/curso';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent implements OnInit {

  element!: Curso;

  @ViewChild(MatTable)
  tabelaCursos!: MatTable<any>;

  constructor(
    private cursosService: CursosService,
    public dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso) {
    this.element = data;
    }

  ngOnInit(): void {
  }

  saveCurso(){
    if(this.element._id !== null){
      this.updateCurso();
    } else {
      this.createNewCurso();
    }
  }

  private updateCurso() {
    this.cursosService.update(this.element)
      .subscribe((data: Curso) => {
        this.tabelaCursos.renderRows();
      });
  }

  private createNewCurso() {
    this.cursosService.save(this.element)
      .subscribe((data: Curso) => {
        this.tabelaCursos.renderRows();
      });
  }

    onCancel(): void {
    this.dialogRef.close();
  }



}
