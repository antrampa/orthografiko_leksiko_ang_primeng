import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { WordAddEditComponent } from './components/word-add-edit/word-add-edit.component';
import { WordListComponent } from './components/word-list/word-list.component';

const routes: Routes = [
  {path: 'all-words', component: WordListComponent},
  {path: 'new-word', component: WordAddEditComponent},
  {path: '', redirectTo: '/all-words', pathMatch: 'full' },
  {path: 'view-all', component: ViewAllComponent},
  {path: '**', component: PageNotFoundComponent}

  //{ path: '**', component: <component-name> }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
