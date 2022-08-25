import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamePageComponent } from './components/game-page/game-page.component';
import { SignComponent } from './components/sign/sign.component';
import {MatIconModule} from "@angular/material/icon";
import { ResultComponent } from './components/result/result.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    GamePageComponent,
    SignComponent,
    ResultComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class GameModule { }
