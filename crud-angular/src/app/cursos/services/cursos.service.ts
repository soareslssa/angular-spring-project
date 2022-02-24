import { Curso } from './../cursos/model/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CursosService {

  private readonly API = '/assets/cursos.json';

  // Injeção de dependencia HttpClient para conexão api
  constructor(private httpClient: HttpClient) { }

  // retorna uma lista de cursos
  list(){
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      delay(5000), // para testar o spinner
      tap(cursos => console.log(cursos))  // apenas para debug
    );
  }
}
