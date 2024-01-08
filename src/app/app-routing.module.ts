import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import type { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ResultPageComponent } from './pages/result-page/result-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: ResultPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
