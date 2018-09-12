import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCoursesComponent } from './modify-courses.component';

describe('ModifyCoursesComponent', () => {
  let component: ModifyCoursesComponent;
  let fixture: ComponentFixture<ModifyCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
