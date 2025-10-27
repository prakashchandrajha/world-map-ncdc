import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intangible } from './intangible';

describe('Intangible', () => {
  let component: Intangible;
  let fixture: ComponentFixture<Intangible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intangible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intangible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
