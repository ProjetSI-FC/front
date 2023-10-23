import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild,inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { Keyword } from 'src/app/shared-component/keyword';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  keywordCtrl = new FormControl('');
  filteredKeywords: Observable<string[]>;
  selectedKeywords: string[] = [];
  allKeywords : string[] = ['euro','Nation','macron','marine','politique','abcz','zouzou'];
  unselectedKeywords: string[] = this.allKeywords.slice();


  @ViewChild('keywordInput') keywordInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredKeywords = this.keywordCtrl.valueChanges.pipe(
      startWith(null),
      map((keyword: string | null) => (keyword ? this.filter(keyword) : this.unselectedKeywords.slice().map(keyword => keyword.toLowerCase()).sort())),
    );
  }

  add(event: MatChipInputEvent): void {
    let value = (event.value || '').trim().toLowerCase();
    if(value){
      if (!this.unselectedKeywords.includes(value)){
        const tempArray = this.filter(value);
        if(tempArray.length !== 0){
          value = tempArray[0];
        }
      }
      // Clear the input value
      event.chipInput!.clear();
      this.keywordCtrl.setValue(null);

      // Add our keyword
      this.selectedKeywords.push(value);
      const index = this.unselectedKeywords.indexOf(value);
      if (index >= 0) {
        this.unselectedKeywords.splice(index, 1);
      }
    }
}

  remove(keyword: string): void {
    const index = this.selectedKeywords.indexOf(keyword);
    this.unselectedKeywords.push(keyword);
    if (index >= 0) {
      this.selectedKeywords.splice(index, 1);

      this.announcer.announce(`Removed ${keyword}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    const keyword = event.option.viewValue
    const index = this.unselectedKeywords.indexOf(keyword);
    if (index >= 0) {
      this.unselectedKeywords.splice(index, 1);
    }
    this.selectedKeywords.push(keyword);
    this.keywordInput.nativeElement.value = '';
    this.keywordCtrl.setValue(null);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const filteredKeyword = this.unselectedKeywords.filter(keyword => keyword.toLowerCase().startsWith(filterValue))
    if (filteredKeyword.length === 0){
      return this.unselectedKeywords.filter(keyword => keyword.toLowerCase().includes(filterValue))
    }
    return filteredKeyword;
  }
}
