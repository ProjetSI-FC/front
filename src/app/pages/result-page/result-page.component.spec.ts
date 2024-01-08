import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { ResultPageComponent } from './result-page.component'
import { SearchbarComponent } from 'src/app/shared-component/searchbar/searchbar.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatChipsModule } from '@angular/material/chips'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('ResultPageComponent', () => {
  let component: ResultPageComponent
  let fixture: ComponentFixture<ResultPageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultPageComponent, SearchbarComponent],
      imports: [
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatChipsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    fixture = TestBed.createComponent(ResultPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
