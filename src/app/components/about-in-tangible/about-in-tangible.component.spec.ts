import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInTangibleComponent } from './about-in-tangible.component';

describe('AboutInTangibleComponent', () => {
  let component: AboutInTangibleComponent;
  let fixture: ComponentFixture<AboutInTangibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutInTangibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutInTangibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
