import { Component, OnInit, ElementRef, Input, Renderer2, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input() value: string;
  @Input() color: string;
  @Input() fontSize: string;
  @Input() time: string;
  @Input() width: string;
  @Input() height: string;
  @Input() border: string;
  @Input() interval: number;
  @ViewChild("label")
  private el: ElementRef;
  public myScroll;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @Output() test: EventEmitter<Number> = new EventEmitter;
  @Output() hold: EventEmitter<Number> = new EventEmitter;
  ngAfterViewInit() {
    this.renderer.setStyle(this.el.nativeElement, "color", this.color);
    this.renderer.setStyle(this.el.nativeElement, "fontSize", this.fontSize);
    this.renderer.setStyle(this.el.nativeElement, "width", this.width);
    this.renderer.setStyle(this.el.nativeElement, "height", this.height);
    this.renderer.setStyle(this.el.nativeElement, "border", this.border);
  }
  /**
   * 跑马灯
   */

  // scroll() {
  //   let space = "";
  //   let seq = 0;
  //   this.el.nativeElement.innerHTML = this.value.substring(seq, this.value.length) + space + this.value.substring(-1, this.value.length);
  //   seq++;
  //   if (seq > this.value.length) {
  //     seq = 0;
  //   }
  // }
  ngOnInit() {

  }



  increment() {
    this.test.emit();
  }

}
