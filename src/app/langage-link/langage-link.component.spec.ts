import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageLinkComponent } from './langage-link.component';

describe('LangageLinkComponent', () => {
  let component: LangageLinkComponent;
  let fixture: ComponentFixture<LangageLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangageLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
