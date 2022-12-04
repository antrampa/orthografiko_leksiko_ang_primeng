import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word';
import { WordServiceService } from 'src/app/services/word-service.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.scss']
})
export class WordListComponent implements OnInit {

  words : Word[] = [];
  constructor(private wordService: WordServiceService) {}

  ngOnInit(): void {
      //this.wordService.getAllWords().then(words => this.words = words);
      this.words = this.wordService.getAllWords();
  }
}
