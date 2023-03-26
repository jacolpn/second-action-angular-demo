import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIdentifierComponent } from './component-identifier.component';

describe('ComponentIdentifierComponent', () => {
  let component: ComponentIdentifierComponent;
  let fixture: ComponentFixture<ComponentIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIdentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
