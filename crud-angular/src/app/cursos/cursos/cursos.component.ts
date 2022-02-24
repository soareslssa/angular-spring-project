import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosService } from './../services/cursos.service';
import { Curso } from './model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent implements OnInit {

  // notacao $ para indicar um observable
  cursos$: Observable<Curso[]>;

  displayedColumns = ['nome', 'categoria'];

  // Injeção de dependencias do service

  constructor(private cursosService: CursosService) {

   this.cursos$ = this.cursosService.list();

   }


  ngOnInit(): void {
  }

}
