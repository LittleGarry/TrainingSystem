import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";

import { Store } from "src/store";
import { AuthService, User } from "src/auth/shared/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "TrainingSystem";

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
}
