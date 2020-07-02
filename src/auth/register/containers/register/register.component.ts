import { Component } from "@angular/core";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  //   styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  constructor() {}

  registerSubmit(event) {
    console.log(event);
  }
}
