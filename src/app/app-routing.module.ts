import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondaryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
