import { Component, OnInit, Input } from '@angular/core';
import { LabelBluePrint } from './label.blueprint';
@Component({
  selector: 'app-ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() public labelBluePrint: LabelBluePrint;
  label = ".label";
  constructor() { }

  ngOnInit() {
  }

  getColor(id: number) {
    switch (id) {
      case 0:
        return 'green';
      case 1:
        return 'blue';
      case 2:
        return 'red';
      case 3:
        return 'white';
      case 4:
        return 'yellow';
      case 5:
        return '#cccccc';
    }
  }

}
