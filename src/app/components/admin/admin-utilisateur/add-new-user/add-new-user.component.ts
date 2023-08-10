import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/model/roles';
import { User } from 'src/model/users';
import { AddNewUser } from 'src/model/addNewUser';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})


export class AddNewUserComponent implements OnInit{

  public user: User = new User;
  public rolesList: Role[] = [];

  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();
  @Input() typeRole: string | undefined;

  public selectedRoleList: Role[] = [];

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.dataLoad();
  }

  // Charge les données depuis le backend
  async dataLoad() {
    await this.adminService.getAllRoles().subscribe((response: any) => {
      this.rolesList = response.data;

      if(this.typeRole === "clientsResidentiels")
      {
        this.rolesList = this.rolesList.filter(x => x.ID_ROLE == 2);
        this.selectedRoleList.push({ ID_ROLE: 2, DESCRIPTION_ROLE: this.rolesList[0].DESCRIPTION_ROLE });
      }
      else if(this.typeRole === "clientsAffaires")
      {
        this.rolesList = this.rolesList.filter(x => x.ID_ROLE == 3);
        this.selectedRoleList.push({ ID_ROLE: 3, DESCRIPTION_ROLE: this.rolesList[0].DESCRIPTION_ROLE });
      }

    });
  }

  // Insert et suprrime un role dans le tableau selectedRole qui devra être envoyé au serveur
  public addRemoveRole(role: Role, event: any) : void {
    let checked = event.target.checked;
    if(role.ID_ROLE && checked == true) this.selectedRoleList.push(role);
    else this.selectedRoleList = this.selectedRoleList.filter((role_item) => role_item.ID_ROLE !== role.ID_ROLE);
  }

  async onSubmit(newUserForm: NgForm) {
    if(newUserForm.valid){
      // console.log(this.user);
      this.user.PASSWORD = "123";
      let newUser = new AddNewUser(this.user, this.selectedRoleList);

      await this.adminService.addNewUser(newUser).subscribe((response: any) => {
        if(response.data && response.success)
        {
          newUserForm.reset(); // Réinitialise le formulaire
          this.selectedRoleList = [];
          this.resetCheckBox();
          alert("Inscription éffectuée avec succès");
        }
        else alert("Échec d'inscription");
      });

    }
  }

  // Décoche les checkbox
  public resetCheckBox() : void {
    let checkBoxTab = document.getElementsByClassName("checkbox");
    for(let i = 0; i < checkBoxTab.length; i++)
    {
      let current = checkBoxTab[i] as HTMLInputElement | null;
      if(current) current.checked = false;
    }
  }

  public closeAddNewUserModal() : void {
    this.closeModal.emit();
  }


}
