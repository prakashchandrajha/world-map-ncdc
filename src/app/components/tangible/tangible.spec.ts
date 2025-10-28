import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tangible } from './tangible';

describe('Tangible', () => {
  let component: Tangible;
  let fixture: ComponentFixture<Tangible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tangible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tangible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
