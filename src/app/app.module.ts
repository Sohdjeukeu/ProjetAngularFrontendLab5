import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { PreposeClientResidentielComponent } from './components/prepose-client-residentiel/prepose-client-residentiel.component';
import { PreposeClientAffaireComponent } from './components/prepose-client-affaire/prepose-client-affaire.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminUtilisateurComponent } from './components/admin/admin-utilisateur/admin-utilisateur.component';
import { AddNewUserComponent } from './components/admin/admin-utilisateur/add-new-user/add-new-user.component';
import { UpdateUserComponent } from './components/admin/admin-utilisateur/update-user/update-user.component';
import { ListeClientsResidentielsComponent } from './components/prepose-client-residentiel/liste-clients-residentiels/liste-clients-residentiels.component';
import { ListeClientsAffairesComponent } from './components/prepose-client-affaire/liste-clients-affaires/liste-clients-affaires.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AdminComponent,
    PreposeClientResidentielComponent,
    PreposeClientAffaireComponent,
    LoginComponent,
    NavBarComponent,
    AdminUtilisateurComponent,
    AddNewUserComponent,
    UpdateUserComponent,
    ListeClientsResidentielsComponent,
    ListeClientsAffairesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
