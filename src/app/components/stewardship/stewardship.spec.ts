import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stewardship } from './stewardship';

describe('Stewardship', () => {
  let component: Stewardship;
  let fixture: ComponentFixture<Stewardship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stewardship]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stewardship);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
