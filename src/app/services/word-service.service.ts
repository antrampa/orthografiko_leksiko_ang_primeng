import { Injectable } from '@angular/core';
import {Word} from './../models/word';

@Injectable({
  providedIn: 'root'
})
export class WordServiceService {

  words: Word[] = [{
    correctWord : "αβάδιστος",
    extraInfo: "-η, -ο",
    wrongWords: "αβαδιστος, αβάδηστος, αυάδιστος, αβαδηστος",
    approved: true
  }];

  getAllWords () : Word[] {
    console.log(this.words);
    return this.words;
  }

  //Observable
  addNewWord (newWord: Word): void {
    this.words.push(newWord);
    console.log(this.words);
  }

  editWord(editWord: Word): Word {
    console.log("edit word", editWord);
    var e = this.words.find(w=>w.correctWord == editWord.correctWord);
    console.log("e", e);
    return editWord;
  }
}
