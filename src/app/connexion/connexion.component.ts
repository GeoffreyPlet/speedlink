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
  user: User = new User();
  session: Boolean = false;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }
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
        if(user[0]){
          document.getElementById('loadError').hidden = true;
          user[0].session = true;
          this.userService.openSession(user[0]);
          this.session = true;
          document.getElementById('back-body').hidden = true;
          document.getElementById('body').hidden = true;
        }
        else{
          this.session = false;
          this.userService.openSession(user[0]);
          document.getElementById('loadError').hidden = false;
        }
      }
    )
  }

}
