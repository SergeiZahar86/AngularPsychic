import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingBoardComponent } from './gaming-board.component';

describe('GamingBoardComponent', () => {
  let component: GamingBoardComponent;
  let fixture: ComponentFixture<GamingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
