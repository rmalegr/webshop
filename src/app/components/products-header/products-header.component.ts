import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html", //
  styles: [], //
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  //Utilizamos el Output para emitir un evento cuando se haga click en el botón de ordenar Ej: @Output() sortUpdated = new EventEmitter<string>();
  sort = "desc";
  itemsShowCount = 12;

  constructor() {}
  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    console.log("Columnas: ", colsNum);
    //Emitimos el evento con el nÚmero de columnas seleccionadas. El componente padre recibirá el evento y se encargará de realizar la ordenación.
    this.columnsCountChange.emit(colsNum);
  }

  //comando git para desconectar github y borrar el repositorio: git push --delete origin master
}
