import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Langage } from '../langage';

@Injectable({
  providedIn: 'root'
})
export class LangageService {
  apiUrl = 'http://localhost:3000/langages/';

  constructor( private http: HttpClient) { }

  /**
   * Creation de la méthode qui retourne mon tableau de langage
   */
  getLangages(): Promise<Langage[]> {
    return this.http.get<Langage[]>(this.apiUrl).toPromise();
  }
  /**
   * 
   * Methode pour avoir les langages actif
   */
  getLangagesNoTrash(): Promise<Langage[]> {
    return this.http.get<Langage[]>(this.apiUrl+'?trash=false').toPromise();
  }

  /**
   * Renvoie un langage selon l'id
   */
  getLangageWithId(id): Promise<Langage> {
    return this.http.get<Langage>(this.apiUrl+''+id).toPromise();
  }


  /**
   * Update d'un langage
   */
  updateLangage(langage: Langage): Promise<Langage>{
    return this.http.put<Langage>(this.apiUrl+''+langage.id, langage).toPromise();
  }

  /**
   * Désactiver ou activer le langage
   */
  trashLangage(langage: Langage): Promise<Langage>{
    return this.http.put<Langage>(this.apiUrl+''+langage.id, langage).toPromise();
  }
}
