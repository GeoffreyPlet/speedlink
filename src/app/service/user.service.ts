import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  postId;

  constructor(private http: HttpClient) { }

  getUser(login: string, mdp: string): Promise<User>{
    return this.http.get<User>('http://localhost:3000/admin?login='+login+'&mdp='+mdp+'').toPromise();
  }

  openSession(user: User): Promise<User>{
   return this.http.put<User>('http://localhost:3000/admin/'+user.id, user).toPromise();
    
  }
}