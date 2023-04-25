import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBookComponent } from './form-book/form-book.component';

const routes: Routes = [
  {path:"book", component: FormBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
