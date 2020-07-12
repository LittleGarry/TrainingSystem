import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from "src/auth/shared/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent {
  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
