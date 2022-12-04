import { Component } from '@angular/core';
import { Word } from 'src/app/models/word';
import { WordServiceService } from 'src/app/services/word-service.service';

@Component({
  selector: 'app-word-add-edit',
  templateUrl: './word-add-edit.component.html',
  styleUrls: ['./word-add-edit.component.scss']
})
export class WordAddEditComponent {

  correct_word: string = "";
  wrong_word: string = "";
  extra: string = "";

  message: string = "";
  
  newWord: Word = {
    correctWord : "",
    extraInfo: "",
    wrongWords: "",
    approved: false
  };

  constructor(private wordService: WordServiceService) {}

  upper() {
    this.correct_word = this.correct_word.toUpperCase();
  }

  save() {
    this.newWord = {
      correctWord : this.correct_word,
      extraInfo: this.extra,
      wrongWords: this.wrong_word,
      approved: false
    };

    this.wordService.addNewWord(this.newWord);
    this.message = "Νέα λέξη καταχωρήθηκε επιτυχώς!!";
    this.clean();
  }

  clean() {
    this.correct_word = "";
    this.extra = "";
    this.wrong_word = "";
  }

  cleanAllMessage() {
    this.clean();
    this.message = "";
  }

}
