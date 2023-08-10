import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientsResidentielsComponent } from './liste-clients-residentiels.component';

describe('ListeClientsResidentielsComponent', () => {
  let component: ListeClientsResidentielsComponent;
  let fixture: ComponentFixture<ListeClientsResidentielsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeClientsResidentielsComponent]
    });
    fixture = TestBed.createComponent(ListeClientsResidentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
