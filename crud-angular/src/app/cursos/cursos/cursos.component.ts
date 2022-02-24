import { Component, OnInit } from '@angular/core';
import { CursosService } from './../services/cursos.service';
import { Curso } from './model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  cursos: Curso[] = [];

  displayedColumns = ['nome', 'categoria'];

  // Injeção de dependencias do service

  constructor(private cursosService: CursosService) {  }


  ngOnInit(): void {
    this.cursos = this.cursosService.list();
  }

}
