import { NgModule } from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { CharacterCardComponent } from "./character-card/character-card.component";
import { CardsLoadingComponent } from "./cards-loading/cards-loading.component";
import { CharacterNotfoundComponent } from "./character-notfound/character-notfound.component";

@NgModule({
  declarations: [
    CharacterCardComponent,
    CardsLoadingComponent,
    CharacterNotfoundComponent,
  ],
  exports: [
    CharacterCardComponent,
    CardsLoadingComponent,
    CharacterNotfoundComponent,
  ],
  imports: [NgxSkeletonLoaderModule],
})
export class ComponentsModule {}
