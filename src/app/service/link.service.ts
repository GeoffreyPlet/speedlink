import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient ) { 
    
  }
  /**
     * Méthode getLinks return les links
     */
    getLinks(): Promise<Link[]> {
      return this.http.get<Link[]>('http://localhost:3000/links').toPromise();
    }
}
