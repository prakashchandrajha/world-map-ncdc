import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheList } from './the-list';

describe('TheList', () => {
  let component: TheList;
  let fixture: ComponentFixture<TheList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
