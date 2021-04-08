import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  //EventEmitter est une methode qui permet d'acceder a emit.
  @Output() eventRecupTexteInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  afficherTexteInput(monEvent: any) {
    //console.log(monEvent.target.value);

    const inputContent = monEvent.target.value;
  console.log(inputContent)
  
  //pour rendre visible le inputContent
    this.eventRecupTexteInput.emit(inputContent);
    
  }
}
