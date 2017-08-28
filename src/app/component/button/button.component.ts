import { Component, ElementRef, Input, AfterViewInit, ViewChild, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value: string; //定义一个button显示的颜色
  value1: string;
  private _disabled: boolean;  //定义一个button是否能被点击
  @Input() set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.setdisabled(this._disabled);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input() color: string;  //定义字体颜色
  color1: string;
  @Input() backgroundColor: string;//定义背景图片
  @Input() border: string;  //定义button边框
  @Input() width: string; //定义button的宽
  @Input() height: string;//定义button的高
  @Input() borderRadius: string; //定义圆角
  @Input() margin: string;  //定义前后左右边距的，四个参数，按照顺时针方向
  @Input() padding: string;  //定义前后左右内距的，四个参数，按照顺时针方向
  @Input() boxShadow: string; //阴影
  @Input() position: string; //定位
  @Input() display: string;//显示


  @ViewChild('greet')  //ViewChild 是属性装饰器，用来从模板视图中获取匹配的元素
  private el: ElementRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() { // 模板中的元素已创建完成
    this.renderer.setAttribute(this.el.nativeElement, 'value', this.value);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.border);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.borderRadius);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
    this.renderer.setStyle(this.el.nativeElement, 'height', this.height);
    this.renderer.setStyle(this.el.nativeElement, 'margin', this.margin);
    this.renderer.setStyle(this.el.nativeElement, 'padding', this.padding);
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', this.boxShadow);
    this.renderer.setStyle(this.el.nativeElement, 'position', this.position);
    this.renderer.setStyle(this.el.nativeElement, 'display', this.display);


  }
  setdisabled(isDisabled: boolean) {
    if (isDisabled) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }

  ngOnInit() {
    this.value1 = this.value;
    this.color1 = this.color;
  }


}
