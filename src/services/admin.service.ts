import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/users';
import { UserRole } from 'src/model/userRole';
import { Role } from 'src/model/roles';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { AddNewUser } from 'src/model/addNewUser';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
/*
  // Authentification
  public userExist(email: string, password: string) : Observable<User[]> {
    let url = `${environment.apiUrl}/api/userExist/${email}/${password}`;
    return this.http.get<User[]>(url).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }*/




  // Authentification
  public userExist(email: string, password: string) : Observable<User[]> {
    let url = `${environment.apiUrl}/api/userExist/${email}/${password}`;
    console.log(Response);



    return this.http.get<User[]>(url).pipe(
      tap((_user:User[])=>{

      }),










      catchError((error) => this.handleError(error, []))
    );
  }


  // Get all user
  public getAllUsers() : Observable<User[]> {
    let url = `${environment.apiUrl}/api/getAllUsers`;
    return this.http.get<User[]>(url).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }

  // Get all roles
  public getAllRoles() : Observable<Role[]> {
    let url = `${environment.apiUrl}/api/getAllRoles`;
    return this.http.get<Role[]>(url).pipe(
      catchError((error) => this.handleError(error, []))
    );
  }

  // Get user roles
  public getUserRoles(userId: number) : Observable<UserRole[]> {
    let url = `${environment.apiUrl}/api/getUserRoles/${userId}`;
    return this.http.get<UserRole[]>(url).pipe(
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

  // Update user
  public updateUser(user: AddNewUser) : Observable<AddNewUser> {
    let url = `${environment.apiUrl}/api/updateUser`;
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user);
    return this.http.put<AddNewUser>(url, body, {'headers': headers})
  }


  private handleError(error: Error, ErrorValue: any) {
    console.error(error);
    return of(ErrorValue)
  }

}
