import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RankingPageComponent} from "./components/ranking-page/ranking-page.component";

const routes: Routes = [
  {
    path: '',
    component: RankingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
