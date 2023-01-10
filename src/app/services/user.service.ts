import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CreateUserReq } from '../models/dtos/create-user-req';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userApi: string

  constructor(private readonly httpClient: HttpClient) {
    this.userApi = new URL(`/api/user`, environment.apiUrl).href
  }

  getAllUser() {

  }

  createUser(req: CreateUserReq) {
    return this.httpClient.post(this.userApi + `/user-create`, req)
  }

  updateUser(id: number) : Observable<any> {
    return this.httpClient.put(this.userApi + `/user-update`, id)
  }

  deleteUser(id: number) : Observable<any>{
    return this.httpClient.delete(this.userApi + `/${id}/user-delete`)
  }

}
