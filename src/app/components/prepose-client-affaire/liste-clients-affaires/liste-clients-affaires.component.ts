import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/users';
import { Role } from 'src/model/roles';
import { AddNewUser } from 'src/model/addNewUser';
import { ClientsAffairesService } from 'src/services/clients-affaires.service';


@Component({
  selector: 'app-liste-clients-affaires',
  templateUrl: './liste-clients-affaires.component.html',
  styleUrls: ['./liste-clients-affaires.component.scss']
})
export class ListeClientsAffairesComponent implements OnInit{

  public user!: User;
  public usersList: User[] = [];
  public rolesList: Role[] = [];
  public showAddNewUserPanel: boolean = false;

  constructor(
    private ClientsAffairesService: ClientsAffairesService
  ) {}

  ngOnInit(): void {

    this.dataLoad(); // Appel cette methode qui charge les données

  }

  // Charge les données depuis le backend
  async dataLoad() {
    await this.ClientsAffairesService.getAllClientsAffaire().subscribe((response: any) => {
      this.usersList = response.data;
      console.log(this.usersList);

    });
  }

    // Ouvre la fenêtre d'ajout utilisateur
    public openAddUserModal() : void {
      this.showAddNewUserPanel = true;
    }

    // Ferme la fenêtre d'ajout utilisateur
    async closeAddUserModal() {
      this.dataLoad(); // Appel cette methode qui charge les données
      this.showAddNewUserPanel = false;
    }

  // Empêche l'utilisateur de cocher ou décoché le champ statut dans la liste des utilisateur
  public cancelAction(event: any) : void {
    event.preventDefault();
  }


}
