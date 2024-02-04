import { Component } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword_service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  keywordsList!: string[];

  constructor(private keywordService: KeywordService) {
    this.keywordService.getAllKeywords().subscribe(keywords => {
      this.keywordsList = keywords;
    });
  }
}
