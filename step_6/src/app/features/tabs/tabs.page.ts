import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Init Tabs');
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      this.router.navigateByUrl('/signin');
    }
  }

}
