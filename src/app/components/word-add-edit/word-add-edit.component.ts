import { Component, Input, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word';
import { WordServiceService } from 'src/app/services/word-service.service';

@Component({
  selector: 'app-word-add-edit',
  templateUrl: './word-add-edit.component.html',
  styleUrls: ['./word-add-edit.component.scss']
})
export class WordAddEditComponent implements OnInit {

  @Input() selectedWord: Word = {
    correctWord : "",
    extraInfo: "",
    wrongWords: "",
    approved: false
  };
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
  ngOnInit(): void {
    if(this.selectedWord != null){
      this.initForm(this.selectedWord);
    }
  }

  upper() {
    this.correct_word = this.correct_word.toUpperCase();
  }

  save() {
    // this.newWord = {
    //   correctWord : this.correct_word,
    //   extraInfo: this.extra,
    //   wrongWords: this.wrong_word,
    //   approved: false
    // };

    this.newWord = this.selectedWord;

    this.wordService.addNewWord(this.newWord);
    this.message = "Νέα λέξη καταχωρήθηκε επιτυχώς!!";
    this.clean();
  }

  clean() {
    this.selectedWord = {
      correctWord : "",
      extraInfo: "",
      wrongWords: "",
      approved: false
    };
  }

  initForm(word: Word) : void {
    this.correct_word = word.correctWord;
    this.extra = word.extraInfo;
    this.wrong_word = word.wrongWords;
    console.log("initForm", word);
    //approved: false
  }

  cleanAllMessage() {
    this.clean();
    this.message = "";
  }

}
