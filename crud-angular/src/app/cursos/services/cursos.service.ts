import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Curso } from './../cursos/model/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, first, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})

export class CursosService {

  private readonly API = 'api/cursos';

  // Injeção de dependencia HttpClient para conexão api
  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog) { }

  // retorna uma lista de cursos
  list(){
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
     // delay(5000), // para testar o spinner
      tap(cursos => console.log(cursos)),  // apenas para debug
    );
  }

  save(novoCurso: Curso){
    return this.httpClient.post<Curso>(this.API, novoCurso);
  }

}
