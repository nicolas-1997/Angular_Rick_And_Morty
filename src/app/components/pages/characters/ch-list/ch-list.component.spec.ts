import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChListComponent } from './ch-list.component';

describe('ChListComponent', () => {
  let component: ChListComponent;
  let fixture: ComponentFixture<ChListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
