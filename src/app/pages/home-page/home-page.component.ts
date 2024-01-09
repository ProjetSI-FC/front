import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword_service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  keywords: string[] = [];
  keywordService: KeywordService;

  constructor(private http: HttpClient) {
    this.keywordService = new KeywordService(http);
  }
  
  ngOnInit() {
    this.keywords = this.keywordService.getAllKeywords();
  }
}
