import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from "../auth/auth.module";

import { AppComponent } from "./containers/app/app.component";

const ROUTES: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*

const firebaseConfig = {
  apiKey: "AIzaSyCRfew0gkmzcNS2Or4rK18EUUXynu2PJkw",
  authDomain: "trainingsystem-85146.firebaseapp.com",
  databaseURL: "https://trainingsystem-85146.firebaseio.com",
  projectId: "trainingsystem-85146",
  storageBucket: "trainingsystem-85146.appspot.com",
  messagingSenderId: "566168883192",
  appId: "1:566168883192:web:de545cf86483e2e5a6500d"
};

*/
