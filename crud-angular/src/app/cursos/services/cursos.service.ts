import { Curso } from './../cursos/model/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';


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
      // apenas para debug
      tap(cursos => console.log(cursos))
    );
  }
}
