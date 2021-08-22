import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { GamingBoardComponent } from './gaming-board/gaming-board.component';
import { HeaderComponent } from './gaming-board/header/header.component';
import { ModalNewGameComponent } from './gaming-board/modal-new-game/modal-new-game.component';
import { ModalEndGameComponent } from './gaming-board/modal-end-game/modal-end-game.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    GamingBoardComponent,
    HeaderComponent,
    ModalNewGameComponent,
    ModalEndGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
