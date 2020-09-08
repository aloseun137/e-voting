import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContestantComponent } from './create-contestant.component';

describe('CreateContestantComponent', () => {
  let component: CreateContestantComponent;
  let fixture: ComponentFixture<CreateContestantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContestantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
