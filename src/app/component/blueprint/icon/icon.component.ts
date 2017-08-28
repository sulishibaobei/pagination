import { Component, OnInit, Input, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { IconBluePrint } from './icon.blueprint';
//import { ICONDATA } from '../icon/icon-data';  //数据直接在子组件里面的
@Component({
  selector: 'app-ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() public iconBluePrint: IconBluePrint;

  specialicon;
  // icondata = ICONDATA;
  bpIconItem: Array<IconBluePrint> = new Array<IconBluePrint>();
  @ViewChild('green')
  private el: ElementRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    for (let i = 0; i < this.iconBluePrint.data.length; i++) {
      const item = new IconBluePrint();
      item.id = this.iconBluePrint.data[i].id;
      item.size = this.iconBluePrint.data.length;
      item.src = this.iconBluePrint.data[i].image;
      item.alt = this.iconBluePrint.data[i].description;
      item.type = this.iconBluePrint.type;
      this.bpIconItem.push(item);
    }
    // for (let i = 0; i < this.icondata.length; i++) {
    //   const item = new IconBluePrint();
    //   item.id = this.icondata[i].id;
    //   item.src = this.icondata[i].image;
    //   item.alt = this.icondata[i].description;
    //   this.bpIconItem.push(item);
    // }
    //this.specialicon = 'special-icon';
  }


  ngAfterViewInit() { // 模板中的元素已创建完成
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #000000');

    //  this.elementRef.nativeElement.getElementsByTagName("img")[1].style.border = "2px solid red";

  }

}
