import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingPageComponent } from './components/ranking-page/ranking-page.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RankingPageComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    MatButtonModule
  ]
})
export class RankingModule { }
