import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  @Input() title: string;
  /**
   * Variable utile au html
   */
  

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getUser('admin', 'admin').then(user => {
      
      this.userSession = user[0];
      this.session = this.userSession.session;
    });
    
  }
  userSession: User = new User();
  user: User = new User();
  session: Boolean;
  toggle(){
    let divToggle = document.querySelector('#back-body').getAttribute('ngModel');
    if(divToggle === 'block'){
      document.querySelector('#back-body').setAttribute('ngModel', 'none');
      document.getElementById('back-body').hidden = true;
      document.getElementById('body').hidden = true;
    }else{
      document.querySelector('#back-body').setAttribute('ngModel', 'block');
      document.getElementById('back-body').hidden = true;
      document.getElementById('body').hidden = true;
    }
  };

  addLink(){

    this.userService.getUser(this.user.login, this.user.mdp).then(
      user => {
        if(user[0].session === false){
          document.getElementById('loadError').hidden = true;
          user[0].session = true;
          this.userService.loadSession(user[0]).then( user =>{
            
            this.session = user.session;
            location.reload();
            
          }
            
          );
          
          document.getElementById('back-body').hidden = true;
          document.getElementById('body').hidden = true;
        }
        
      }
    )
  }

}
