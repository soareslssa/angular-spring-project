import { Curso } from './model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    {_id: "1", nome:"Angular", categoria:"Teste"} ,
    {_id: "2", nome:"Spring", categoria:"Teste 2"}
  ];

  displayedColumns = ['nome', 'categoria'];

  constructor() { }


  ngOnInit(): void {
  }

}
