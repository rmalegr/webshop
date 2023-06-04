import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 300, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols] || 400;
  category: string | undefined;


  constructor() { }

  ngOnInit(): void { }

  onColumnsCountChange(colsNumber: number): void {
    this.cols = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols] || 400;
  }

  onShowCategory(category: string): void {
    this.category = category;
    console.log(this.category);
  }
}
