import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ColorsService } from "../colors.service";
import { Color } from "../models/color";
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "random-color",
  templateUrl: "./random-color.component.html",
  styleUrls: ["./random-color.component.css"],
})
export class RandomColorComponent implements OnInit {
  @ViewChild("random", { static: false }) signupForm: NgForm;

  constructor(
    public dialog: MatDialog,
    private colorsService: ColorsService,
    public dialogRef: MatDialogRef<RandomColorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Color
  ) {}

  ngOnInit(): void {}

  replaceToRandomColor() {
    this.colorsService.replaceWithRandomColor(this.data.id - 1);
    this.dialog.closeAll();
  }
  cancel() {
    this.dialog.closeAll();
  }
}
