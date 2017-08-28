import { Component, OnInit, ElementRef } from '@angular/core';
import { Style } from './style';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  style = Style;

  value: string = "这是一个button";
  disabled: boolean = this.style.disabled[0];
  color: string = "green";
  backgroundColor = "white";
  border = "3px solid #000000";
  width = "300px"; height = "30px";
  borderRadius = "20px";
  margin = "0px 0px 0px 20px";
  padding = "10px 10px 10px 10px";
  boxShadow = "10px 10px 10px red";
  position = this.style.position[2];
  display = this.style.display[0];
  fontSize = "20px";
  private el: ElementRef;
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {

  }
  test() {
    alert(this.value);
  }

}
