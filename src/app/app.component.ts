import { Component, OnInit, VERSION } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  yourName;
  data;
  dataBrute;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataBrute = this.dataService.getUsersData();
    this.data = this.dataBrute;
  }

//la valeur de input
  afficherTexteInputRecu(content: string) {
   // console.log("Contenu reçu : ", content);

    this.data = this.dataBrute.filter(x => x.name.first.toLowerCase().startsWith(content.toLowerCase()))

  }
}
