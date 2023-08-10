import { HttpClient } from '@angular/common/http/index.js';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class ProfileService implements CanActivate {

  profile!: any;
  endPointUrl = environment.apiUrl +/'me'/;

  constructor( private httpClient:HttpClient) { }


  getProfile(){


    return new Observable((observer)=>{

      if(this.profile){
        observer.next(this.profile)
        observer.complete();
      }

      else{
        this.httpClient.get(this.endPointUrl).subscribe(profile => {

          this.profile = profile;
          observer.next(profile);
          observer.complete();
        }, error =>{
          observer.error(error);
          observer.complete();
        })
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {


    return new Observable((observer)=>{

      this.getProfile().subscribe(profile=>{
        
      })
    })

  }


  }


