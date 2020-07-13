import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WorkoutsComponent } from "./containers/workouts/workouts.component";

const ROUTES: Routes = [
  {
    path: "",
    component: WorkoutsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [WorkoutsComponent],
})
export class WorkoutsModule {}
