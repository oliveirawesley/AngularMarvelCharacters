import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

import { environment } from "src/environments/environment";

import { Md5 } from "ts-md5/dist/md5";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  constructor(private api: ApiService) {}

  public get(body): Observable<any> {
    const timeStamp = Number(new Date());

    const hash = `${timeStamp}${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`;

    return this.api.get(
      `characters?ts=${timeStamp}&apikey=${
        environment.PUBLIC_KEY
      }&hash=${Md5.hashStr(hash)}&limit=${body.limit}&orderBy=${
        body.orderBy
      }&offset=${body.offset}`
    );
  }

  public getDetail(body, id): Observable<any> {
    const timeStamp = Number(new Date());

    const hash = `${timeStamp}${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`;

    return this.api.get(
      `characters/${id}?ts=${timeStamp}&apikey=${
        environment.PUBLIC_KEY
      }&hash=${Md5.hashStr(hash)}`
    );
  }

  public search(searchTerm, body): Observable<any> {
    const timeStamp = Number(new Date());

    const hash = `${timeStamp}${environment.PRIVATE_KEY}${environment.PUBLIC_KEY}`;

    return this.api.get(
      `characters?ts=${timeStamp}&apikey=${
        environment.PUBLIC_KEY
      }&hash=${Md5.hashStr(hash)}&limit=${body.limit}&orderBy=${
        body.orderBy
      }&nameStartsWith=${searchTerm}`
    );
  }
}
