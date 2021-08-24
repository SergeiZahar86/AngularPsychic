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
import { CardComponent } from './gaming-board/card/card.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {ApiService} from "./shared/api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GamingBoardComponent,
    HeaderComponent,
    ModalNewGameComponent,
    ModalEndGameComponent,
    CardComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSliderModule,
		MatButtonToggleModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatFormFieldModule,
		MatSelectModule,
		MatOptionModule,
		HttpClientModule,
		FormsModule
	],
  providers: [ApiService],
	//providers: [{provide: HttpClient, useClass: ApiService},],
  bootstrap: [AppComponent]
})
export class AppModule { }
