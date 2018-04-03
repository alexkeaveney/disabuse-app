import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsAndStrangersIntroComponent } from './sections/friends-and-strangers/friends-and-strangers-intro/friends-and-strangers-intro.component';
import { FriendsAndStrangersMenuComponent } from './sections/friends-and-strangers/friends-and-strangers-menu/friends-and-strangers-menu.component';
import { FriendsAndStrangersFriendsComponent } from './sections/friends-and-strangers/friends-and-strangers-friends/friends-and-strangers-friends.component';
import { FriendsAndStrangersStrangersComponent } from './sections/friends-and-strangers/friends-and-strangers-strangers/friends-and-strangers-strangers.component';
import { FriendsAndStrangersActivityComponent } from './sections/friends-and-strangers/friends-and-strangers-activity/friends-and-strangers-activity.component';


const routes: Routes = [
  { path: 'friends-and-strangers/intro', component: FriendsAndStrangersIntroComponent },
  { path: 'friends-and-strangers/menu', component: FriendsAndStrangersMenuComponent },
  { path: 'friends-and-strangers/friends', component: FriendsAndStrangersFriendsComponent },
  { path: 'friends-and-strangers/strangers', component: FriendsAndStrangersStrangersComponent },
  { path: 'friends-and-strangers/activity', component: FriendsAndStrangersActivityComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
