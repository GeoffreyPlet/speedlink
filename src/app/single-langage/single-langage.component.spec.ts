import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLangageComponent } from './single-langage.component';

describe('SingleLangageComponent', () => {
  let component: SingleLangageComponent;
  let fixture: ComponentFixture<SingleLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLangageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
