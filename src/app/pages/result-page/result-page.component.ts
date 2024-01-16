import { Component } from '@angular/core'
import { KeywordService } from 'src/app/services/keyword_service';

@Component({
  selector: 'app-secondary-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent {
  articles: { keywordsSet: string[], filesSet: {fileMetadata:{chaine: string, date: string, titre: string}, score: number  }[] } = { keywordsSet: [], filesSet: [] };
  fileSet: {fileMetadata:{chaine: string, date: Date, titre: string},score:number}[] = [];
  keywordsList!: string[];

  constructor(private keywordService: KeywordService) {
    this.keywordService.getAllKeywords().subscribe(keywords => {
      this.keywordsList = keywords;
    });
    this.articles = history.state.articles;

    this.fileSet = this.articles.filesSet.map(file => {
      return {
        fileMetadata: {
          chaine: file.fileMetadata.chaine,
          date: this.convertStringToDate(file.fileMetadata.date),
          titre: file.fileMetadata.titre
        },
        score: file.score
      };
    });
    
    this.fileSet.sort((a, b) => {
      // Compare the scores in descending order
      return b.score - a.score;
    });
  }

  convertStringToDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/');
    return new Date(Number(year), Number(month) - 1, Number(day));
  }



}
