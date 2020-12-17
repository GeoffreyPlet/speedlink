import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }
  session: Boolean;

  ngOnInit(): void {
    this.userService.getUser('admin', 'admin').then( user => {
      this.session = user[0].session;
    });
  }

}
