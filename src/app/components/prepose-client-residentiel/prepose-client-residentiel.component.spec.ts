import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreposeClientResidentielComponent } from './prepose-client-residentiel.component';

describe('PreposeClientResidentielComponent', () => {
  let component: PreposeClientResidentielComponent;
  let fixture: ComponentFixture<PreposeClientResidentielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreposeClientResidentielComponent]
    });
    fixture = TestBed.createComponent(PreposeClientResidentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
