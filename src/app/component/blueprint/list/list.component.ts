import { Component, OnInit, Input } from '@angular/core';
import { ListBluePrint } from './list.blueprint';
import { ButtonBluePrint } from '../button/button.blueprint';
@Component({
  selector: 'app-ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public listBluePrint: ListBluePrint;
  private items: Array<ButtonBluePrint> = new Array<ButtonBluePrint>();

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.listBluePrint.size; i++) {
      const _item = new ButtonBluePrint();
      _item.id = i;
      _item.caption.content = 'LIST COMPOMENT INCLUDED BUTTON' + i;
      _item.caption.id = i;
      _item.type = 'btn-danger';
      _item.onClick = ((id: number) => {
        this.onButtonClick(id);
      });
      this.items.push(_item);
    }
  }

  onButtonClick(idx: number) {
    this.listBluePrint.onListItemClick(this.listBluePrint.id, idx);
  }

}
