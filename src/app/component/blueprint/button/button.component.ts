import { Component, OnInit, Input } from '@angular/core';
import { ButtonBluePrint } from './button.blueprint';

@Component({
  selector: 'app-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public buttonBluePrint: ButtonBluePrint;
  constructor() { }
  ngOnInit() {
  }
}
