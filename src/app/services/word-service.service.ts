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
    return this.words;
  }

  // addNewWord {Word newWord} : void {

  // }
}
