import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './Pages/news/news.component';
import { resolvearticles } from './services/articles.resolve';

const routes: Routes = [
  { path: 'home', component: NewsComponent }
  // , resolve : { articles : resolvearticles }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
