import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users = [];

  constructor(private usersServices: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersServices.get().then(res => {
      this.users = res.users;
    }, err => {
      console.error('Load user error', err);
    });
  }

}
