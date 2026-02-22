import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecardComp } from './moviecard-comp';

describe('MoviecardComp', () => {
  let component: MoviecardComp;
  let fixture: ComponentFixture<MoviecardComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviecardComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviecardComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
