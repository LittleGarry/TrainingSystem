import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/auth/shared/guards/auth.guard";

const ROUTES: Routes = [
  {
    path: "meals",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./meals/meals.module").then((x) => x.MealsModule),
  },
  {
    path: "schedule",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./schedule/schedule.module").then((x) => x.ScheduleModule),
  },
  {
    path: "workouts",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./workouts/workouts.module").then((x) => x.WorkoutsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [],
})
export class HealthModule {}
