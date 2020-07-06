import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AngularFireModule, FirebaseAppConfig } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { SharedModule } from "./shared/shared.module";

const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCRfew0gkmzcNS2Or4rK18EUUXynu2PJkw",
  authDomain: "trainingsystem-85146.firebaseapp.com",
  databaseURL: "https://trainingsystem-85146.firebaseio.com",
  projectId: "trainingsystem-85146",
  storageBucket: "trainingsystem-85146.appspot.com",
  messagingSenderId: "566168883192",
  appId: "1:566168883192:web:de545cf86483e2e5a6500d",
};

const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./register/register.module").then((m) => m.RegisterModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule,
  ],
  declarations: [],
})
export class AuthModule {}
