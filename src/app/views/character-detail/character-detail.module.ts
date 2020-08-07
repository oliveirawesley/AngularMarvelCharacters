import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharacterDetailRoutingModule } from "./character-detail-routing.module";
import { CharacterDetailComponent } from "./character-detail.component";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, ComponentsModule, CharacterDetailRoutingModule],
})
export class CharacterDetailModule {}
