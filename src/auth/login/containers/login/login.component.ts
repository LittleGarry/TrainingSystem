import { Component } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  //   styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor() {}

  loginSubmit(event) {
    console.log(event);
  }
}
