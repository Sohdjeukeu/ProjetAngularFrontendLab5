import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { User } from 'src/model/users';
import { AddNewUser } from 'src/model/addNewUser';

@Injectable({
  providedIn: 'root'
})
export class ClientsResidentielsService {

  constructor(private http: HttpClient) { }

  // Get all user
  public getAllClientsResidentiels() : Observable<User[]> {
    let url = `${environment.apiUrl}/api/getAllClientsResidentiels`;
    return this.http.get<User[]>(url).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }

  // Add new user
  public addNewUser(user: AddNewUser) : Observable<AddNewUser> {
    let url = `${environment.apiUrl}/api/addNewUser`;
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user);
    return this.http.post<AddNewUser>(url, body, {'headers': headers})
  }


  private handleError(error: Error, ErrorValue: any) {
    console.error(error);
    return of(ErrorValue)
  }


}
