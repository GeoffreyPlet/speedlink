import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-liste-link',
  templateUrl: './liste-link.component.html',
  styleUrls: ['./liste-link.component.scss']
})
export class ListeLinkComponent implements OnInit {

  constructor(private linkService: LinkService, private langageService: LangageService) { }
  /**
   * Mes variables
   */
    langages: Langage[];
    links: Link[];
    currentLink: Link = new Link();
    searchWord: String;
    checkModif: Boolean = false;
    currentModif: Number;

  ngOnInit(): void {
    this.linkService.getLinks().then( link => {
      this.links = link;
    });
    this.langageService.getLangages().then( langage => {
      this.langages = langage;
    });
  }

  /**
   * Function qui permet d'aller chercher un lien
   */
  search(){
     this.linkService.seachAllLink(this.searchWord).then( link => {
      this.links = link;
    }); 
  }

  toggle(id){
    if( this.checkModif === false){
      this.linkService.getLinkById(id).then( link => {
        this.currentLink = link;
        console.log(this.currentLink);
        document.getElementById('option-'+id+'-'+this.currentLink.id_langage).setAttribute('selected', '');
        document.getElementById('modif-link-'+id).hidden = false;
        this.currentModif = id;
        this.checkModif = true;
      });
      
    }
    else{
      alert('Terminer votre modification avant de changer de lien');
    } 
    
  }

  close(){
    if(this.checkModif === true){
      document.getElementById('modif-link-'+this.currentModif).hidden = true;
      this.currentModif = null;
      this.checkModif = false;
    }
  }
  modifLink(){
    this.linkService.updateLink(this.currentLink);
    location.reload();
  }
  delete(link){
    let verif = prompt('Saisir O pour valider ou N pour annuler');
    if (verif == 'O' || verif == 'o'){
      this.linkService.deleteLink(link);
      location.reload();
    }
    
  }

}
