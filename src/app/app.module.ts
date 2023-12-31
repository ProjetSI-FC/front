import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component'

@NgModule({
  declarations: [AppComponent, HomePageComponent, SecondaryPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
