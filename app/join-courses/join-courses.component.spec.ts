import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCoursesComponent } from './join-courses.component';

describe('JoinCoursesComponent', () => {
  let component: JoinCoursesComponent;
  let fixture: ComponentFixture<JoinCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
