import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CursosService {

  // Injeção de dependencia para conexão api java

  constructor(private httpClient: HttpClient) { }

  // retorna uma lista de cursos
  list(){
    return [
      {_id: "1", nome:"Angular", categoria:"Teste"} ,
      {_id: "2", nome:"Spring", categoria:"Teste 2"}
    ];
  }
}
