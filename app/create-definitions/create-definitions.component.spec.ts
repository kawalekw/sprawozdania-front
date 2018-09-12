import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDefinitionsComponent } from './create-definitions.component';

describe('CreateDefinitionsComponent', () => {
  let component: CreateDefinitionsComponent;
  let fixture: ComponentFixture<CreateDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
