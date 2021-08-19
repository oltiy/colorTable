import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";
import { RandomColorComponent } from "./random-color/random-color.component";
import { HomeComponent } from "./home/home.component";
import { AddColorDialogComponent } from "./add-color-dialog/add-color-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    RandomColorComponent,
    HomeComponent,
    AddColorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatTableExporterModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
