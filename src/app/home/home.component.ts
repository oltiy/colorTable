import { Component, OnInit } from "@angular/core";
import { ColorsService } from "../colors.service";
import { Color } from "../models/color";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { RandomColorComponent } from "../random-color/random-color.component";
import { AddColorDialogComponent } from "../add-color-dialog/add-color-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  dialogComponent: RandomColorComponent;
  displayedColumns = ["id", "name", "color"];
  eventsHistory = [];

  dataSource = new MatTableDataSource<Color>();

  constructor(
    private colorsService: ColorsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.colorsService.colorSubject.subscribe((rows) => {
      this.dataSource.data = rows;
    });
    this.colorsService.getInitialColors();
    this.colorsService.historySubject.subscribe((history) => {
      this.eventsHistory = history;
    });
  }

  onRandom(row) {
    this.dialog.open(RandomColorComponent, {
      data: {
        id: row.id,
        name: row.name,
        color: row.color,
      },
      width: "40%",
      panelClass: "epsSelectorPanel",
    });
  }

  openDialog() {
    this.dialog.open(AddColorDialogComponent, {
      width: "70%",
      height: "150px",
      panelClass: "epsSelectorPanel",
    });
  }
}
