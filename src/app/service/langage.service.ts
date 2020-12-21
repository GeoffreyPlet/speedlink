import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Langage } from '../langage';

@Injectable({
  providedIn: 'root'
})
export class LangageService {
  url = 'https://file.io';

  constructor( private http: HttpClient) { }

  /**
   * Creation de la méthode qui retourne mon tableau de langage
   */
  getLangages(): Promise<Langage[]> {
    return this.http.get<Langage[]>('http://localhost:3000/langages').toPromise();
  }

  /**
   * Renvoie un langage selon l'id
   */
  getLangageWithId(id): Promise<Langage> {
    return this.http.get<Langage>('http://localhost:3000/langages/'+id).toPromise();
  }

  /**
   * Upload d'image
   */
  uploadImage(formData: FormData): Observable<any> {
    
    return this.http.post(this.url, formData, { observe: 'events',  reportProgress: true });
  }
}
