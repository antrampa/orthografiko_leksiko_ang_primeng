import { Component } from '@angular/core';

@Component({
  selector: 'app-word-add-edit',
  templateUrl: './word-add-edit.component.html',
  styleUrls: ['./word-add-edit.component.scss']
})
export class WordAddEditComponent {

  correct_word: string = "PrimeNG Test";

  upper() {
    this.correct_word = this.correct_word.toUpperCase();
  }

}
