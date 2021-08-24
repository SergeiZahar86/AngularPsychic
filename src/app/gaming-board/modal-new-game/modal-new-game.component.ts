import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-new-game',
  templateUrl: './modal-new-game.component.html',
  styleUrls: ['./modal-new-game.component.scss']
})
export class ModalNewGameComponent implements OnInit {
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitReload: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  public closeMolal() {
    this.isConfirmed.emit(false);
  }
  assentMolal() {
    this.emitReload.emit(true);
    this.isConfirmed.emit(false);
  }
}
