import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreposeClientAffaireComponent } from './prepose-client-affaire.component';

describe('PreposeClientAffaireComponent', () => {
  let component: PreposeClientAffaireComponent;
  let fixture: ComponentFixture<PreposeClientAffaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreposeClientAffaireComponent]
    });
    fixture = TestBed.createComponent(PreposeClientAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
