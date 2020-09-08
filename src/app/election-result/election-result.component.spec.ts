import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionResultComponent } from './election-result.component';

describe('ElectionResultComponent', () => {
  let component: ElectionResultComponent;
  let fixture: ComponentFixture<ElectionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
