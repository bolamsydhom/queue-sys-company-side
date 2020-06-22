import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFirstPageComponent } from './employee-first-page.component';

describe('EmployeeFirstPageComponent', () => {
  let component: EmployeeFirstPageComponent;
  let fixture: ComponentFixture<EmployeeFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
