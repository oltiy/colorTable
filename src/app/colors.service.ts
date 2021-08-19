import { Injectable } from "@angular/core";
import { Color } from "./models/color";
import { Observable, Subject } from "rxjs";

let Colors: Color[] = [
  { id: 1, name: "Red", color: "red" },
  { id: 2, name: "Blue", color: "blue" },
  { id: 3, name: "White", color: "white" },
  { id: 4, name: "Green", color: "green" },
  { id: 5, name: "Yellow", color: "yellow" },
];

let PrintEvent: string[] = [];

@Injectable({
  providedIn: "root",
})
export class ColorsService {
  colorObesrvable: Observable<Color>;
  colorSubject = new Subject<Color[]>();
  historySubject = new Subject<string[]>();

  constructor() {}

  getInitialColors(): void {
    this.colorSubject.next(Colors);
  }

  replaceWithRandomColor(currentRowIdx: number) {
    const randomRowIdx = Math.floor(Math.random() * Colors.length);
    const copyFrom = Colors[randomRowIdx];
    const roIdx = currentRowIdx + 1;
    Colors[currentRowIdx].color = copyFrom.color;
    Colors[currentRowIdx].name = copyFrom.name;
    PrintEvent.unshift(`Update ${roIdx} to ${Colors[randomRowIdx].color}`);
    this.historySubject.next(PrintEvent);
    this.colorSubject.next(Colors);
  }

  addNewColor(name: any, color: string) {
    Colors = [
      ...Colors,
      {
        id: Colors.length + 1,
        name,
        color,
      },
    ];
    PrintEvent.unshift(`New Color  ${color} `);
    this.colorSubject.next(Colors);
    this.historySubject.next(PrintEvent);
  }
}
