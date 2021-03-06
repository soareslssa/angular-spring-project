import { MatTable } from '@angular/material/table';
import { CursoDialogComponent } from './../../shared/components/curso-dialog/curso-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Curso } from './model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;

  @ViewChild(MatTable)
  tabelaCursos!: MatTable<any>

  displayedColumns = ['id','nome', 'categoria', 'acoes'];

  constructor(private cursosService: CursosService, public dialog: MatDialog) {
    this.cursos$ = this.cursosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  addCurso(curso: Curso | null): void {
    const dialogRef = this.dialog.open(CursoDialogComponent, {
      width: 'auto',
      data:
        curso === null
          ? {
              nome: '',
              categoria: '',
            }
          : curso,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.tabelaCursos.renderRows();
    });
  }

  deleteCurso(id: number){

    this.cursosService.delete(id)
    .pipe(
      catchError((error) => {
        this.onError('Erro ao deletar curso.');
        return of([]);
      }))
    .subscribe((data: Curso) => {
      this.tabelaCursos.renderRows();
    }
    );
  }
}
