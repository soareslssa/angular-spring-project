package com.soaresdev.crudspring.controller;

import com.soaresdev.crudspring.model.Curso;
import com.soaresdev.crudspring.repository.CursoRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {

    private final CursoRepository cursoRepository;



    @GetMapping
    public List<Curso> list(){
        return cursoRepository.findAll();
    }

    @PostMapping
    public void addCurso(@RequestBody Curso novoCurso){
        this.cursoRepository.save(novoCurso);
    }

    @PutMapping
    public void updateCurso(@RequestBody Curso curso){
      this.cursoRepository.save(curso);
    }

    @DeleteMapping
    public void deleteCurso(@RequestParam Long id){
        this.cursoRepository.deleteById(id);
    }
}
