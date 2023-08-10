import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { AdminComponent } from './components/admin/admin.component';
import { PreposeClientResidentielComponent } from './components/prepose-client-residentiel/prepose-client-residentiel.component';
import { PreposeClientAffaireComponent } from './components/prepose-client-affaire/prepose-client-affaire.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminUtilisateurComponent } from './components/admin/admin-utilisateur/admin-utilisateur.component';
import { ListeClientsResidentielsComponent } from './components/prepose-client-residentiel/liste-clients-residentiels/liste-clients-residentiels.component';
import { ListeClientsAffairesComponent } from './components/prepose-client-affaire/liste-clients-affaires/liste-clients-affaires.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: "full",
  },
  {
    path: 'accueil', component: AccueilComponent, pathMatch: "full",
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: "", redirectTo: "utilisateur", pathMatch: "prefix" },
      { path: "utilisateur", component: AdminUtilisateurComponent, pathMatch: "full" }
    ]
  },
  {
    path: 'prepose-client-residentiel', component: PreposeClientResidentielComponent,
    children: [
      { path: "", redirectTo: "clients-residentiels", pathMatch: "prefix" },
      { path: "clients-residentiels", component: ListeClientsResidentielsComponent, pathMatch: "full" }
    ]
  },
  {
    path: 'prepose-client-affaire', component: PreposeClientAffaireComponent,
    children: [
      { path: "", redirectTo: "clients-affaires", pathMatch: "prefix" },
      { path: "clients-affaires", component: ListeClientsAffairesComponent, pathMatch: "full" }
    ]
  },
  { path: '**', component: LoginComponent, pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
