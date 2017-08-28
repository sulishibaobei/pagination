import { Component, OnInit, Input } from '@angular/core';
import { BluePrint } from '../base/blueprint';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  @Input() public bluePrints: Array<BluePrint>;
  constructor() { }

  ngOnInit() {

  }

}
