import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDefinitionsComponent } from './modify-definitions.component';

describe('ModifyDefinitionsComponent', () => {
  let component: ModifyDefinitionsComponent;
  let fixture: ComponentFixture<ModifyDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
