import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ColorsService } from "../colors.service";

@Component({
  selector: "app-add-color-dialog",
  templateUrl: "./add-color-dialog.component.html",
  styleUrls: ["./add-color-dialog.component.css"],
})
export class AddColorDialogComponent implements OnInit {
  @ViewChild("addColor", { static: false }) newRowOfColor: NgForm;

  constructor(public dialog: MatDialog, private colorsService: ColorsService) {}

  ngOnInit(): void {}
  onSubmit() {
    const color = this.newRowOfColor.value.addingColor.color;
    const name = this.newRowOfColor.value.addingColor.name;
    this.colorsService.addNewColor(name, color);
    this.dialog.closeAll();
  }

  cancel() {
    this.dialog.closeAll();
  }
}
