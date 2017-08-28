import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { LabelBluePrint } from './label/label.blueprint';
import { ButtonBluePrint } from './button/button.blueprint';
import { AlertBluePrint } from './alert/alert.blueprint';
import { IconBluePrint } from './icon/icon.blueprint';
import { ICONDATA } from './icon/icon-data';
import { ListBluePrint } from './list/list.blueprint';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit {
  @ViewChild('green')
  icondata = ICONDATA;
  bpLabel: LabelBluePrint = new LabelBluePrint();
  bpButton: ButtonBluePrint = new ButtonBluePrint();
  bpButton1: ButtonBluePrint = new ButtonBluePrint();
  bpAlert: AlertBluePrint = new AlertBluePrint();
  bpIcon: IconBluePrint = new IconBluePrint();
  bpList: ListBluePrint = new ListBluePrint();

  bps: any = [
    this.bpLabel,
    this.bpButton,
    this.bpAlert,
    this.bpIcon,
    this.bpList,
  ];
  private el: ElementRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    this.bpLabel.content = "HELLO ,LABEL";
    this.bpButton.id = 1;
    this.bpButton.caption.content = "HELLO,BUTTON";
    this.bpButton.type = "btn-primary";
    this.bpButton.onClick = ((id: number) => {
      this.onButtonClick(id);
    });
    this.bpIcon.id = 1;
    this.bpIcon.data = this.icondata;
    this.bpIcon.type = "special-icon";

    this.bpList.id = 1;
    this.bpList.size = 5;
    this.bpList.onListItemClick = ((id: number, idx: number) => {
      this.onListItemClick(id, idx);
    });
  }
  onButtonClick(id: number): void {
    if (id = this.bpButton.id) {
      this.bpAlert.title = "HELLO ALERT";
      this.bpAlert.type = "info";
      this.bpAlert.message = "THIS IS A ALERT";
      this.bpAlert.staticAlertClosed = true;
      this.bpAlert.AlertClose = (() => {
        this.onAlertClick();
        setTimeout(() => {
          this.bpLabel.content = this.bpButton1.caption.content;
          this.bps.splice(this.bps.length - 1, this.bps.length);
        }, 1000);
      });
    }
  }

  onAlertClick(): void {
    this.bps.push(this.bpButton1);
    this.bpButton1.id = 2;
    this.bpButton1.caption.content = "SUCCESS,I AM  BUTTON" + this.bpButton1.id;
    this.bpButton1.type = "btn-success";
    this.bpButton1.onClick = ((id: number) => {
      console.log("NEW A BUTTON");
    })
  }

  onListItemClick(id: number, idx: number) {
    this.bpAlert.title = " THIS IS LIST ALERT";
    this.bpAlert.type = "warning";
    this.bpAlert.message = "THIS IDX IS:" + idx;
    this.bpAlert.staticAlertClosed = true;
    this.bpAlert.AlertClose = (() => {
      console.log('LIST ID:' + id + '   BUTTON IDX:' + idx);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() { // 模板中的元素已创建完成
    //this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #000000');
    let a = this.elementRef.nativeElement.getElementsByTagName("img");
    a[1].style.border = "2px solid red";
    a[0].style.padding = "10px 10px";
  }

}
