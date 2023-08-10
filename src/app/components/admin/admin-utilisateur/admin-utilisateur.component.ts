import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/users';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-utilisateur',
  templateUrl: './admin-utilisateur.component.html',
  styleUrls: ['./admin-utilisateur.component.scss']
})

export class AdminUtilisateurComponent implements OnInit{

  public usersList: User[] = [];
  public showAddNewUserPanel: boolean = false;
  public showUpdateNewUserPanel: boolean = false;

  public selectedUser!: User;

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.dataLoad(); // Appel cette methode qui charge les données
  }

  // Charge les données depuis le backend
  async dataLoad() {
    await this.adminService.getAllUsers().subscribe((response: any) => {
      this.usersList = response.data;
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

  // Ouvre la fenêtre de modification d'un utilisateur
  public openUpdateUserModal(user: User) : void {
    if(user.ID_USER)
    {
      this.selectedUser = { ...user };
      this.showUpdateNewUserPanel = true;
    }
  }

  // Ferme la fenêtre de modification d'un utilisateur
  async closeUpdateModal() {
    this.dataLoad(); // Appel cette methode qui charge les données
    this.showUpdateNewUserPanel = false;
  }

  // Supprime un utilisateur
  public deleteUser(user: User) : void {
    if(user.ID_USER)
    {

    }
  }

  // Empêche l'utilisateur de cocher ou décoché le champ statut dans la liste des utilisateur
  public cancelAction(event: any) : void {
    event.preventDefault();
  }


}
