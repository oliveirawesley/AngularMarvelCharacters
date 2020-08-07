import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CharactersService } from "src/app/services/characters.service";
import { Body } from "src/app/models/body.model";

@Component({
  selector: "app-character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.scss"],
})
export class CharacterDetailComponent implements OnInit {
  characterId: string;
  body: Body;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.body = {
      orderBy: "name",
      limit: 10,
      offset: 0,
    };

    this.route.params.subscribe((params) => {
      this.characterId = params[`id`];
    });

    this.getDetail();
  }

  getDetail() {
    this.charactersService
      .get(this.body, `/${this.characterId}`)
      .subscribe((data: any) => {});
  }
}
