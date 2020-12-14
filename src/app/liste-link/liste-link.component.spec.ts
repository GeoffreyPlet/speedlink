import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLinkComponent } from './liste-link.component';

describe('ListeLinkComponent', () => {
  let component: ListeLinkComponent;
  let fixture: ComponentFixture<ListeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
