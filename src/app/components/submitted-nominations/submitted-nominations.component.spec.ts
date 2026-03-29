import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmittedNominationsComponent } from './submitted-nominations.component';

describe('SubmittedNominationsComponent', () => {
  let component: SubmittedNominationsComponent;
  let fixture: ComponentFixture<SubmittedNominationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmittedNominationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedNominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
