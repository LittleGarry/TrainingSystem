import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ScheduleComponent } from "./containers/schedule/schedule.component";

const ROUTES: Routes = [
  {
    path: "",
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ScheduleComponent],
})
export class ScheduleModule {}
