import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamePageComponent} from "./components/game-page/game-page.component";
import {ResultComponent} from "./components/result/result.component";

const routes: Routes = [
  {
    path: '',
    component: GamePageComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
