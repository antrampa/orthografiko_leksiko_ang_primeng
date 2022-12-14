import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordAddEditComponent } from './components/word-add-edit/word-add-edit.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {SplitterModule} from 'primeng/splitter';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewAllComponent } from './components/view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WordListComponent,
    WordAddEditComponent,
    PageNotFoundComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    TableModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
