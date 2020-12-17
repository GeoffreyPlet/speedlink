import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLangageComponent } from './admin-langage.component';

describe('AdminLangageComponent', () => {
  let component: AdminLangageComponent;
  let fixture: ComponentFixture<AdminLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLangageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
