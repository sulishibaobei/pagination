import { Component, OnInit, Input } from '@angular/core';
import { AlertBluePrint } from './alert.blueprint';

@Component({
  selector: 'app-ui-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() public alertBluePrint: AlertBluePrint;
  constructor() { }

  ngOnInit() {
  }

}
