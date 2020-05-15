import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Character } from "./character.model";

@Injectable({ providedIn: "root" })
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacter(character: string): Observable<Character> {
    const urlCharacter = `${environment.apiUrl}/api/characters/${character}`;
    return this.http.get<Character>(urlCharacter);
  }
}
