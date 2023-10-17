import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Keyword } from 'src/app/shared-component/keyword';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  keyWords = new FormControl();

  keywordList: Keyword[] = [new Keyword("euro"),
                            new Keyword("nation"),
                            new Keyword("Macron")];

  selectedKeywords: Keyword[] = new Array<Keyword>();

  filteredKeywords!: Observable<Keyword[]>;
  lastFilter: string = '';

  ngOnInit() {
    this.filteredKeywords = this.keyWords.valueChanges.pipe(
      startWith<string | Keyword[]>(''),
      map(value => typeof value === 'string' ? value : this.lastFilter),
      map(filter => this.filter(filter))
    );
  }

  filter(filter: string): Keyword[] {
    this.lastFilter = filter;
    if (filter) {
      return this.keywordList.filter(option => {
        return option.word.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      })
    } else {
      return this.keywordList.slice();
    }
  }

  displayFn(value: Keyword[] | string): string | undefined {
    let displayValue: string;
    displayValue = ""
    if (Array.isArray(value)) {
      value.forEach((keyword) => {
        displayValue = keyword.word + " ,"
      });
    } else {
      displayValue = value;
    }
    return displayValue;
  }

  optionClicked(event: Event, keyword: Keyword) {
    event.stopPropagation();
    this.toggleSelection(keyword);
  }

  toggleSelection(keyword: Keyword) {
    keyword.selected = !keyword.selected;
    if (keyword.selected) {
      this.selectedKeywords.push(keyword);
    } else {
      const i = this.selectedKeywords.findIndex(value => value.word === keyword.word);
      this.selectedKeywords.splice(i, 1);
    }

    this.keyWords.setValue(this.selectedKeywords);
  }
}
