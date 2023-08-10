import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/model/users';
import { Role } from 'src/model/roles';
import { AddNewUser } from 'src/model/addNewUser';
import { ClientsResidentielsService } from 'src/services/clients-residentiels.service';

@Component({
  selector: 'app-liste-clients-residentiels',
  templateUrl: './liste-clients-residentiels.component.html',
  styleUrls: ['./liste-clients-residentiels.component.scss']
})

export class ListeClientsResidentielsComponent implements OnInit{

  public user!: User;
  public usersList: User[] = [];
  public rolesList: Role[] = [];
  public showAddNewUserPanel: boolean = false;

  constructor(
    private clientResidentielService: ClientsResidentielsService
  ) {}

  ngOnInit(): void {
    this.dataLoad(); // Appel cette methode qui charge les données
  }

  // Charge les données depuis le backend
  async dataLoad() {
    await this.clientResidentielService.getAllClientsResidentiels().subscribe((response: any) => {
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

  // async onSubmit(newUserForm: NgForm) {
  //   if(newUserForm.valid){
  //     // console.log(this.user);

  //     this.user.PASSWORD = "123";
  //     this.rolesList.push({ID_ROLE: 2, DESCRIPTION_ROLE: "Préposé aux clients résidentiels"});
  //     let newUser = new AddNewUser(this.user, this.rolesList);

  //     await this.clientResidentielService.addNewUser(newUser).subscribe((response: any) => {
  //       if(response.data && response.success)
  //       {
  //         newUserForm.reset(); // Réinitialise le formulaire
  //         alert("Inscription éffectuée avec succès");
  //       }
  //       else alert("Échec d'inscription");
  //     });

  //   }
  // }


  // Empêche l'utilisateur de cocher ou décoché le champ statut dans la liste des utilisateur
  public cancelAction(event: any) : void {
    event.preventDefault();
  }


}
