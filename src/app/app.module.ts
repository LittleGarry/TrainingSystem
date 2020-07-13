import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthModule } from "../auth/auth.module";
import { HealthModule } from "../health/health.module";

import { Store } from "src/store";

import { AppComponent } from "./containers/app/app.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/schedule",
  },
];

@NgModule({
  declarations: [AppComponent, AppNavComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
