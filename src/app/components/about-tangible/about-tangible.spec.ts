import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTangible } from './about-tangible';

describe('AboutTangible', () => {
  let component: AboutTangible;
  let fixture: ComponentFixture<AboutTangible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTangible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTangible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
