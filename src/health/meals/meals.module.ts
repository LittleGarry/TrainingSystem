import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MealsComponent } from "./containers/meals/meals.component";

const ROUTES: Routes = [
  {
    path: "",
    component: MealsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [MealsComponent],
})
export class MealsModule {}
