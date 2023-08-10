import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from 'src/model/roles.js';
import { User } from 'src/model/users';
import { AddNewUser } from 'src/model/addNewUser';
import { AdminService } from 'src/services/admin.service';
import { UserRole } from 'src/model/userRole.js';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{

  @Input() user!: User;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  // public user: User = new User();
  public rolesList: Role[] = [];
  public userRolesList: UserRole[] = [];
  public selectedRoleList: Role[] = [];

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.dataLoad(this.user.ID_USER)
    .then(_ => {
      this.rolesList.forEach(role => {
        let exist = this.userRolesList.find(x => x.ID_ROLE === role.ID_ROLE);
        if(exist) this.selectedRoleList.push(role);
      });
    });
  }

  // Charge les données depuis le backend
  async dataLoad(userId: number) {

    this.rolesList = await new Promise((resolve, reject) => {
      this.adminService.getAllRoles().subscribe((response: any) => {
        this.rolesList = response.data;
        resolve(this.rolesList);
      });
    });

    this.userRolesList = await new Promise((resolve, reject) => {
      this.adminService.getUserRoles(userId).subscribe((response: any) => {
        this.userRolesList = response.data;
        resolve(this.userRolesList);
      });
    });

  }

  public userHaveRole(role: Role) : boolean {
    let exist = this.userRolesList.find(x => x.ID_ROLE === role.ID_ROLE);
    if(exist) return true;
    else return false;
  }



  // Insert et suprrime un role dans le tableau selectedRole qui devra être envoyé au serveur
  public addRemoveRole(role: Role, event: any) : void {
    let checked = event.target.checked;
    if(role.ID_ROLE && checked == true) this.selectedRoleList.push(role);
    else this.selectedRoleList = this.selectedRoleList.filter((role_item) => role_item.ID_ROLE !== role.ID_ROLE);
  }

  // Permet de modifier le statut du compte
  public desableOrEnableEccount(event: any) : void {
    let checked = event.target.checked;
    if(checked == true) this.user.IS_LOCK =  1;
    else this.user.IS_LOCK = 0;
  }

  async onSubmit(newUserForm: NgForm) {
    if(newUserForm.valid) {
      let newUser = new AddNewUser(this.user, this.selectedRoleList);
      await this.adminService.updateUser(newUser).subscribe((response: any) => {
        if(response.data) alert(response.message);
        else alert("Erreur de modification")
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
