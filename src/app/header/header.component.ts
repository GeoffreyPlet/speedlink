import { Component, OnInit, Input } from '@angular/core';
import { Langage } from '../langage';
import { LangageService } from '../service/langage.service';
import { UserService } from '../service/user.service';
import { User } from '../user';

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
  @Input() session: Boolean;

  /**
   * Je crée mon object langage
   */
    monLangage: Langage;

    /* Tableau de langage qui nous premettera de les utiliser dans notre header.component.html */
    mesLangages: Langage[];

    user: User = new User();

    

  /**
   * 
   * @param langageService 
   * @class LangageService
   * Affirme que notre header.component a besoins de noutre class LangageService 
   */
  constructor(private langageService: LangageService, private userService: UserService) { }

  ngOnInit(): void {
    /**
     * Initialisation de mon tableau de langage mesLangages
     */
    this.langageService.getLangages().then(langages => {
      this.mesLangages = langages;
    });
  }
  toggle(){
    let divToggle = document.querySelector('#back-body').getAttribute('ngModel');
    if(divToggle === 'block'){
      document.querySelector('#back-body').setAttribute('ngModel', 'none');
      document.getElementById('back-body').hidden = true;
      document.getElementById('body').hidden = true;
    }else{
      document.querySelector('#back-body').setAttribute('ngModel', 'block');
      document.getElementById('back-body').hidden = false;
      document.getElementById('body').hidden = false;
    }
  }
  lougOut(){
    this.userService.getUser('admin', 'admin').then( user => {
      this.user = user[0];
      this.user.session = false;
      this.userService.loadSession(this.user);
      this.session = this.user.session;
    });
  }

}
