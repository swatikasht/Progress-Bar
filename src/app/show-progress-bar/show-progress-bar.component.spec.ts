import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProgressBarComponent } from './show-progress-bar.component';

describe('ShowProgressBarComponent', () => {
  let component: ShowProgressBarComponent;
  let fixture: ComponentFixture<ShowProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
