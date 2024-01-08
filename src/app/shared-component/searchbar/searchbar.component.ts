/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/indent */
/* @typescript-eslint/space-before-function-paren */

import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { Component, type ElementRef, ViewChild, inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { type Observable } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { LiveAnnouncer } from '@angular/cdk/a11y'
import { type MatChipInputEvent } from '@angular/material/chips'
import { type MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { Router } from '@angular/router'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA]
  keywordCtrl = new FormControl('')
  filteredKeywords: Observable<string[]>
  selectedKeywords: string[] = []
  allKeywords: string[] = [
    'euro',
    'Nation',
    'macron',
    'marine',
    'politique',
    'abcz',
    'zouzou'
  ]

  unselectedKeywords: string[] = this.allKeywords.slice()
  crossIconPath: string = 'src/app/assets/img/gray-cross.svg'

  @ViewChild('keywordInput') keywordInput!: ElementRef<HTMLInputElement>

  announcer = inject(LiveAnnouncer)

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private readonly router: Router
  ) {
    iconRegistry.addSvgIcon(
      'crossIcon',
      sanitizer.bypassSecurityTrustResourceUrl(this.crossIconPath)
    )
    this.filteredKeywords = this.keywordCtrl.valueChanges.pipe(
      startWith(null),
      map((keyword: string | null) =>
        keyword
          ? this.filter(keyword)
          : this.unselectedKeywords
              .slice()
              .map((keyword) => keyword.toLowerCase())
              .sort()
      )
    )
  }

  add(event: MatChipInputEvent): void {
    let value = (event.value || '').trim().toLowerCase()
    if (value) {
      if (!this.unselectedKeywords.includes(value)) {
        const tempArray = this.filter(value)
        if (tempArray.length !== 0) {
          value = tempArray[0]
        }
      }
      // Clear the input value
      this.keywordCtrl.setValue(null)

      // Add our keyword
      this.selectedKeywords.push(value)
      const index = this.unselectedKeywords.indexOf(value)
      if (index >= 0) {
        this.unselectedKeywords.splice(index, 1)
      }
    }
  }

  /** Remove a keyword */
  remove(keyword: string): void {
    const index = this.selectedKeywords.indexOf(keyword)
    this.unselectedKeywords.push(keyword)
    if (index >= 0) {
      this.selectedKeywords.splice(index, 1)

      this.announcer.announce(`Removed ${keyword}`)
    }
  }

  goToPage2(): void {
    this.router.navigate(['/second'])
  }

  /** remove all keyword */
  removeAll(): void {
    this.selectedKeywords.forEach((keyword) => {
      this.unselectedKeywords.push(keyword)
    })
    this.selectedKeywords = []
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const keyword = event.option.viewValue
    const index = this.unselectedKeywords.indexOf(keyword)
    if (index >= 0) {
      this.unselectedKeywords.splice(index, 1)
    }
    this.selectedKeywords.push(keyword)
    this.keywordInput.nativeElement.value = ''
    this.keywordCtrl.setValue(null)
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    const filteredKeyword = this.unselectedKeywords.filter((keyword) =>
      keyword.toLowerCase().startsWith(filterValue)
    )
    if (filteredKeyword.length === 0) {
      return this.unselectedKeywords.filter((keyword) =>
        keyword.toLowerCase().includes(filterValue)
      )
    }
    return filteredKeyword
  }
}
