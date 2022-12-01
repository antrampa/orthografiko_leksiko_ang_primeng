import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { WordAddEditComponent } from './components/word-add-edit/word-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WordListComponent,
    WordAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
