import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';
import { RouterModule } from '@angular/router';
import { SectionsService } from './sections.service';
import { FriendsAndStrangersComponent } from './sections/friends-and-strangers/friends-and-strangers.component';
import { FriendsAndStrangersIntroComponent } from './sections/friends-and-strangers/friends-and-strangers-intro/friends-and-strangers-intro.component';
import { FriendsAndStrangersMenuComponent } from './sections/friends-and-strangers/friends-and-strangers-menu/friends-and-strangers-menu.component';
import { FriendsAndStrangersFriendsComponent } from './sections/friends-and-strangers/friends-and-strangers-friends/friends-and-strangers-friends.component';
import { FriendsAndStrangersStrangersComponent } from './sections/friends-and-strangers/friends-and-strangers-strangers/friends-and-strangers-strangers.component';
import { FriendsAndStrangersActivityComponent } from './sections/friends-and-strangers/friends-and-strangers-activity/friends-and-strangers-activity.component';
import { FriendsAndStrangersNavComponent } from './sections/friends-and-strangers/friends-and-strangers-nav/friends-and-strangers-nav.component';
import { FriendsAndStrangersHeaderComponent } from './sections/friends-and-strangers/friends-and-strangers-header/friends-and-strangers-header.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'sections',
    pathMatch: 'full'
  },
  {
    path: 'sections',
    component: SectionsComponent
  },
  {
    path: 'sections/friends-and-strangers',
    redirectTo: 'sections/friends-and-strangers/intro'
  },
  {
    path: 'sections/friends-and-strangers/intro',
    component: FriendsAndStrangersIntroComponent
  },
  {
    path: 'sections/friends-and-strangers/menu',
    component: FriendsAndStrangersMenuComponent
  }, {
      path: 'sections/friends-and-strangers/friends',
      component: FriendsAndStrangersFriendsComponent
  }, {
      path: 'sections/friends-and-strangers/strangers',
      component: FriendsAndStrangersStrangersComponent
  }, {
      path: 'sections/friends-and-strangers/activity',
      component: FriendsAndStrangersActivityComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    FriendsAndStrangersComponent,
    FriendsAndStrangersIntroComponent,
    FriendsAndStrangersMenuComponent,
    FriendsAndStrangersFriendsComponent,
    FriendsAndStrangersStrangersComponent,
    FriendsAndStrangersActivityComponent,
    FriendsAndStrangersNavComponent,
    FriendsAndStrangersHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [SectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
