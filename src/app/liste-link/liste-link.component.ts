import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-liste-link',
  templateUrl: './liste-link.component.html',
  styleUrls: ['./liste-link.component.scss']
})
export class ListeLinkComponent implements OnInit {

  constructor(private linkService: LinkService) { }
  /**
   * Mes variables
   */
    links: Link[];
    searchWord: String;
    checkModif: Boolean = false;
    currentModif: Number;

  ngOnInit(): void {
    this.linkService.getLinks().then( link => {
      this.links = link;
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
      document.getElementById('modif-link-'+id).hidden = false;
      this.currentModif = id;
      this.checkModif = true;
    }
    else{
      alert('Terminer votre modification avant de la fermer');
    } 
    
  }

  close(){
    if(this.checkModif === true){
      document.getElementById('modif-link-'+this.currentModif).hidden = true;
      this.currentModif = null;
      this.checkModif = false;
    }
  }

}
