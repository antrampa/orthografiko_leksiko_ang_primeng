import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordAddEditComponent } from './components/word-add-edit/word-add-edit.component';
import { WordListComponent } from './components/word-list/word-list.component';

const routes: Routes = [
  {path: 'all-words', component: WordListComponent},
  {path: 'new-word', component: WordAddEditComponent},
  {path: '', component: WordListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
