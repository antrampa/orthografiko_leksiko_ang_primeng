import { Component, Input } from '@angular/core';
import { Word } from 'src/app/models/word';
import { WordAddEditComponent } from '../word-add-edit/word-add-edit.component';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent {

  selectedWord : any = {};

  onEditWord(editWord: Word): void {
    console.log("onEdit main", editWord);
    this.selectedWord = editWord;
  }
}
