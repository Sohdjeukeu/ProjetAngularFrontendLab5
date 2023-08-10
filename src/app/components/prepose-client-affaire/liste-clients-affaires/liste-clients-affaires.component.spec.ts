import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientsAffairesComponent } from './liste-clients-affaires.component';

describe('ListeClientsAffairesComponent', () => {
  let component: ListeClientsAffairesComponent;
  let fixture: ComponentFixture<ListeClientsAffairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeClientsAffairesComponent]
    });
    fixture = TestBed.createComponent(ListeClientsAffairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
