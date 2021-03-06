import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  urlApi = 'http://localhost:3000/links/';

  constructor(private http: HttpClient ) { 
    
  }
  /**
     * Méthode getLinks return les links
     */
    getLinks(): Promise<Link[]> {
      return this.http.get<Link[]>(this.urlApi).toPromise();
    }

    /**
     * Mérthode getLinkById return un link par son id 
     */
    getLinkById(id: Number): Promise<Link> {
      return this.http.get<Link>(this.urlApi+'/'+id).toPromise();
    }

    /**
     *  Méthode getLinkWithLangageId
     */
    getLinkWithLangageId(langageId: Number): Promise<Link[]>{
      return this.http.get<Link[]>(this.urlApi+'?id_langage='+langageId).toPromise();
    }

    /**
     * Méthode qui ajoute un lien
     */
    addLink(link: Link): Promise<Link>{
      return this.http.post<Link>(this.urlApi, link).toPromise();
    }
    
    /**
     * Méthode pour la recherche de link selon un langage
     */
    seachLink(search: String, id: Number): Promise<Link[]>{
      return this.http.get<Link[]>(this.urlApi+'?id_langage='+id+'&q='+search).toPromise();
    }

    /**
     * Méthode pour rechercher lun link
     */
    seachAllLink(search: String): Promise<Link[]>{
      return this.http.get<Link[]>(this.urlApi+'?q='+search).toPromise();
    }

    /**
     *  Méthode pour update un link
     */
    updateLink(link: Link): Promise<Link>{
      return this.http.put<Link>(this.urlApi+''+link.id, link).toPromise();
    }

    /**
     *  Méthode pour delete un lien
     */
    deleteLink(link: Link){
      this.http.delete(this.urlApi+''+link.id).toPromise();
    }
}
