import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {pluck} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public baseUrl: any = environment.baaseApi;
  public contactListApiUrl = this.baseUrl + environment.getContactListApi;
  public contactByIdApiUrl = this.baseUrl + environment.getContactByIdApi;
  public createUserApiUrl = this.baseUrl + environment.CreateUserApi;
  public deleteUserApiUrl = this.baseUrl + environment.DeleteUserApi;
  constructor(private http: HttpClient) { }
 
 
  public getContactList() {
    return this.http.get(this.contactListApiUrl).pipe(pluck('data'));
  }
  public getContactById(id: number) {
    return this.http.get(`${this.contactByIdApiUrl}${id}`).pipe(pluck('data'));;
  }
  public deleteUser(id: number) {
    return this.http.delete(`${this.deleteUserApiUrl}${id}`);
  }
  public createUser(user: any) {
    return this.http.post(this.createUserApiUrl, user);
  }
}
