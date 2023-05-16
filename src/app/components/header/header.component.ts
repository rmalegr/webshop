import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  cols = 3;
  title: string = "Hola soy Header"; // titulo de tipo string inicializado
  subtitle: string = "Hola soy un subtitulo"; // titulo de tipo string inicializado

  constructor() {
    this.changeTitle(); //llamando a la funcion changeTitle() para cambiar el titulo de la pagina cada segundo
  }

  ngOnInit(): void {}
  //crear un setTimeout para cambiar el titulo de la pagina cada segundo

  changeTitle() {
    setTimeout(() => {
      this.title = "Hola soy Header 2";
    }, 1000);
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
