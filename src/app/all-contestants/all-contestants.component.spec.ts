import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContestantsComponent } from './all-contestants.component';

describe('AllContestantsComponent', () => {
  let component: AllContestantsComponent;
  let fixture: ComponentFixture<AllContestantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllContestantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContestantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
