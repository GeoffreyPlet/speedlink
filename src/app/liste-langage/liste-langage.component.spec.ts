import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLangageComponent } from './liste-langage.component';

describe('ListeLangageComponent', () => {
  let component: ListeLangageComponent;
  let fixture: ComponentFixture<ListeLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLangageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
