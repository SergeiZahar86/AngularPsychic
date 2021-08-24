import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";


@Component({
	selector: 'app-gaming-board',
	templateUrl: './gaming-board.component.html',
	styleUrls: ['./gaming-board.component.scss']
})
export class GamingBoardComponent implements OnInit {

	public error: any;
	public selectedNumber: any;
	public isModalNewGame: boolean = false;
	public isModalEndGame: boolean = false;
	public my: string = 'my ' + ' my1';
	public authenticity: any;
	public dataGame !: any;
	public psychicMen: any ;
	public playerNumbers: any;

	constructor(private api: ApiService) {
	}

	StartGame() {
		this.api.StartGame().subscribe(res => {
			this.dataGame = res;
			this.playerNumbers = this.dataGame.player_Numbers;
			//console.log("playerNumbers   ",this.playerNumbers)
			//console.log("dataGame   ",this.dataGame)
			this.psychicMen = this.dataGame.psychics;
			//console.log(this.psychicMen)
		},
			error => {this.error = error.message; console.log("error    ",error);}
		)
	}
	EndRound(){
		this.api.EndRound(this.selectedNumber).subscribe(res => {
			this.dataGame = res;
			this.playerNumbers = this.dataGame.player_Numbers;
			//console.log("playerNumbers End  ",this.playerNumbers)
			//console.log("dataGame  End ",this.dataGame)
			this.psychicMen = this.dataGame.psychics;
			//console.log(this.psychicMen)
		},
			error => {this.error = error.message; console.log("error    ",error);}
		)
	}
	ngOnInit(): void {
	}
	reload() {
		this.StartGame();
	}
	public showModalNewGame() {
		this.isModalNewGame = true;
	}
	public closeModalNewGame(isConfirmed: boolean) {
		this.isModalNewGame = isConfirmed;
	}
	showModalEndGame() {
		this.isModalEndGame = true;
	}
	public closeModalEndGame(isConfirmed: boolean) {
		this.isModalEndGame = isConfirmed;
	}
	endGame(emitReload: any) {
		this.selectedNumber = emitReload;
		this.EndRound();
	}
}
