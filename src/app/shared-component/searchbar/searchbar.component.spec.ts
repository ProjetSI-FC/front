import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchbarComponent } from './searchbar.component'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatChipsModule } from '@angular/material/chips'

describe('SearchbarComponent', () => {
  let component: SearchbarComponent
  let fixture: ComponentFixture<SearchbarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbarComponent],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatChipsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    fixture = TestBed.createComponent(SearchbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
