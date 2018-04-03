import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-and-strangers-menu',
  templateUrl: './friends-and-strangers-menu.component.html',
  styleUrls: ['./friends-and-strangers-menu.component.css']
})
export class FriendsAndStrangersMenuComponent implements OnInit {

  title: String = "Menu";

  constructor() { }

  ngOnInit() {
  }

}
