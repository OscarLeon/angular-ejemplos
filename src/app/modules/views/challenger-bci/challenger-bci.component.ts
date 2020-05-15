import { Component, OnInit } from "@angular/core";
import { Character } from "./character.model";
import { CharacterService } from "./character.service";

@Component({
  selector: "app-challenger-bci",
  templateUrl: "./challenger-bci.component.html",
  styleUrls: ["./challenger-bci.component.scss"],
})
export class ChallengerBciComponent implements OnInit {
  public character: string;
  // Por mejorar => Usar Array<Character>
  public characterLuke: any;
  public characterDarthVader: any;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.character = "luke";
    this.getCharacterStarWars(this.character)
      .then((response) => {
        this.characterLuke = response;
      })
      .catch((_) => {
        this.characterLuke = {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "Tatooine",
          image: "images/luke.jpg",
          species: ["Human"],
          vehicles: ["Snowspeeder", "Imperial Speeder Bike"],
          starships: ["X-wing", "Imperial shuttle"],
          films: [],
        };
      });
    this.character = "darth-vader";
    this.getCharacterStarWars(this.character)
      .then((response) => {
        this.characterDarthVader = response;
      })
      .catch((_) => {
        this.characterDarthVader = {
          name: "Darth Vader",
          height: "202",
          mass: "136",
          hair_color: "none",
          skin_color: "white",
          eye_color: "yellow",
          birth_year: "41.9BBY",
          gender: "male",
          homeworld: "Tatooine",
          image: "images/darth-vader.jpg",
          species: ["Human"],
          vehicles: [],
          starships: ["TIE Advanced x1"],
          films: [],
        };
      });

    // Caso de error, por el momento devuelve el objeto en null
    // this.character = 'anakin';
    // this.getCharacterStarWars(this.character).then(response => {
    //   this.characterAnakin = response;
    // });
  }

  async getCharacterStarWars(character: string): Promise<Character> {
    let responseCharacter: Character = null;
    await this.characterService
      .getCharacter(character)
      .toPromise()
      .then((response) => {
        console.log({ response });
        responseCharacter = response;
      })
      .catch((error) => {
        // error.error trae el mensaje que se definio en la API
        // Por mejorar agregar un mensaje tipo alerta
        // alert(error.error);
        console.log(error ? error.error : "Error interno del servidor");
      });

    if (responseCharacter) {
      return Promise.resolve(responseCharacter);
    } else {
      return Promise.reject(responseCharacter);
    }
  }
}
