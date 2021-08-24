import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-end-game',
  templateUrl: './modal-end-game.component.html',
  styleUrls: ['./modal-end-game.component.scss']
})
export class ModalEndGameComponent implements OnInit {
  @Output() isConfirmedEnd: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitReload: EventEmitter<any> = new EventEmitter<any>();
  states: any = [1, 2, 3, 4];
  public selectNumber: number | undefined;
  constructor() { }
  ngOnInit(): void {
  }
  public closeMolal() {
    this.isConfirmedEnd.emit(false);
  }
  assentMolal() {
    this.emitReload.emit(this.selectNumber);
    this.isConfirmedEnd.emit(false);
  }
}
