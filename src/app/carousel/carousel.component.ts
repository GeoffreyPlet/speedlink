import { Component, OnInit } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {


  /**
   * Option
   * @param slidesToShow Nombre de slide qu'on affiche
   * @param slidesToScroll Nombre de slide qui se décale pour le scroll
   */
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": false};
  

/*
  * Méthode
  * Ajoute une slide
   addSlide() {
    
  };
  
  * Méthode
  * Supprime une slide
  removeSlide() {
    
  }; */
  
  /**
   * Méthode
   * Initalisation du carousel
   */
  slickInit(e) {
    
    var div = document.getElementsByClassName('slick-active')[0].id
    this.currentLangage = this.mesLangages[div];
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {

    var div = document.getElementsByClassName('slick-active')[0].id

    for (let i = 0; i < this.mesLangages.length; i++){
      
      if(parseInt(div) === this.mesLangages[i].id){
        this.currentLangage = this.mesLangages[i];
      }
    }
    
    /**
     * Récupere les links de db.json
     */
    this.linkService.getLinks().then( links => {
      
      /* Suppression du tbaleau currentLink pour le remplir avec les nouveau link */
      this.currentLinks.splice(0, this.currentLinks.length);

      /* Vérification de la laison langage.id avec link.id_langage */
      for(let i =0 ; i < links.length; i++){
        if(links[i].id_langage === this.currentLangage.id)
        this.currentLinks.push(links[i]);
      } 
    });
  }
  
  beforeChange(e) {
    console.log('beforeChange');
    
  }



  mesLangages: Langage[];
  currentLangage: Langage;
  currentLinks: Link[] = [];

  

constructor(private langageService: LangageService, private linkService: LinkService) { }

ngOnInit(): void {
  
  
  /**
     * langages est la clé de mon tableau JSON - Ref db.json
     * this.lagages est mon tableau langages: Langage[] - Ref langage-link.component
     * Récupere les langages de db.json
     */
    
  this.langageService.getLangagesNoTrash().then(langages => {
    this.mesLangages = langages;
    


     /**
     * Récupere les links de db.json
     */
    this.linkService.getLinks().then( links => {
      this.currentLangage = this.mesLangages[0];
      for(let i =0 ; i < links.length; i++){
        if(links[i].id_langage === this.currentLangage.id)
        this.currentLinks.push(links[i]);
      } 
    });

  });

  

 

  
  
}

}
