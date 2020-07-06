import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/auth/shared/services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  //   styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  async loginSubmit(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
