import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaAndNominationsComponent } from './criteria-and-nominations.component';

describe('CriteriaAndNominationsComponent', () => {
  let component: CriteriaAndNominationsComponent;
  let fixture: ComponentFixture<CriteriaAndNominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriaAndNominationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriaAndNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
