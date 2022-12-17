import { Component, OnInit, Output,  EventEmitter } from '@angular/core';
import { Word } from 'src/app/models/word';
import { WordServiceService } from 'src/app/services/word-service.service';


@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  @Output() onEditWord: EventEmitter<Word> = new EventEmitter();

  words : Word[] = [];
  constructor(private wordService: WordServiceService) {}

  ngOnInit(): void {
      //this.wordService.getAllWords().then(words => this.words = words);
      this.words = this.wordService.getAllWords();
  }

  onClick(selectedWord: Word): void {
    console.log("OnClick ", selectedWord);
    this.onEditWord.next(selectedWord);
  }
}
