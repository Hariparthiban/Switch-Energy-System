import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReadingsComponent } from './view-readings.component';

describe('ViewReadingsComponent', () => {
  let component: ViewReadingsComponent;
  let fixture: ComponentFixture<ViewReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReadingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
