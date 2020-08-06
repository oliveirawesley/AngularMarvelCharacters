import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "character-detail",
    loadChildren: () =>
      import("./views/character-detail/character-detail.module").then(
        (m) => m.CharacterDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
