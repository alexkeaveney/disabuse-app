import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-and-strangers-activity',
  templateUrl: './friends-and-strangers-activity.component.html',
  styleUrls: ['./friends-and-strangers-activity.component.css']
})
export class FriendsAndStrangersActivityComponent implements OnInit {

  title: String = "Activity";
  constructor() { }

  ngOnInit() {
  }

}
