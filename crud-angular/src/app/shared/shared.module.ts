import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';



@NgModule({
  declarations: [ErrorDialogComponent,CursoDialogComponent, CategoriaPipe],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    CursoDialogComponent,
    CategoriaPipe]
})

export class SharedModule { }
