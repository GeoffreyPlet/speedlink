import { Component, OnInit, Input } from '@angular/core';
import { Langage } from '../langage';
import { LangageService } from '../service/langage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /**
   * Input value
   */
  @Input() title: string;
  

  /**
   * Je crée mon object langage
   */
    monLangage: Langage;

    /* Tableau de langage qui nous premettera de les utiliser dans notre header.component.html */
    mesLangages: Langage[];

    

  /**
   * 
   * @param langageService 
   * @class LangageService
   * Affirme que notre header.component a besoins de noutre class LangageService 
   */
  constructor(private langageService: LangageService) { }

  ngOnInit(): void {
    /**
     * Initialisation de mon tableau de langage mesLangages
     */
    this.langageService.getLangages().then(langages => {
      this.mesLangages = langages;
    });
  }

}
