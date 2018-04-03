import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-and-strangers-intro',
  templateUrl: './friends-and-strangers-intro.component.html',
  styleUrls: ['./friends-and-strangers-intro.component.css']
})
export class FriendsAndStrangersIntroComponent implements OnInit {

  title: String = "Test";
  constructor() { }

  ngOnInit() {
  }

}
