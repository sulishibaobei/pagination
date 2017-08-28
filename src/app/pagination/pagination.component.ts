import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { Data } from './data';
const PAGE: Page[] = [
  { id: 1, name: 'zhangzhang', age: 20 },
  { id: 2, name: 'xiaoxiao', age: 24 },
  { id: 3, name: 'yuyu', age: 19 },
  { id: 4, name: 'zhangxiao', age: 20 },
  { id: 5, name: 'Smite', age: 50 },
  { id: 6, name: 'Datu', age: 34 },
  { id: 7, name: 'DUDU', age: 29 },
  { id: 8, name: 'YOUYOU', age: 30 },
  { id: 9, name: 'xinzhang', age: 20 },
  { id: 10, name: 'Amada', age: 24 },
  { id: 11, name: 'Adaer', age: 19 },
  { id: 12, name: 'hele', age: 20 },
  { id: 13, name: 'Datu', age: 34 },
  { id: 14, name: 'DUDU', age: 29 },
  { id: 15, name: 'YOUYOU', age: 30 },
  { id: 16, name: 'xinzhang', age: 20 },
  { id: 17, name: 'Amada', age: 24 },
  { id: 18, name: 'Adaer', age: 19 },
  { id: 19, name: 'hele', age: 20 },
  { id: 20, name: 'Datu', age: 34 },
  { id: 21, name: 'DUDU', age: 29 },
  { id: 22, name: 'YOUYOU', age: 30 },
  { id: 23, name: 'xinzhang', age: 20 },
  { id: 24, name: 'Amada', age: 24 },
  { id: 25, name: 'Adaer', age: 19 },
  { id: 26, name: 'hele', age: 20 },
  { id: 27, name: 'YOUYOU', age: 30 },
  { id: 28, name: 'xinzhang', age: 20 },
  { id: 29, name: 'Amada', age: 24 },
  { id: 30, name: 'Adaer', age: 19 },
  { id: 31, name: 'hele', age: 20 },
  { id: 32, name: 'YOUYOU', age: 30 },
  { id: 33, name: 'xinzhang', age: 20 },
  { id: 34, name: 'Amada', age: 24 },
  { id: 35, name: 'Adaer', age: 19 },
  { id: 36, name: 'hele', age: 20 },
  { id: 37, name: 'YOUYOU', age: 30 },
  { id: 38, name: 'xinzhang', age: 20 },
  { id: 39, name: 'Amada', age: 24 },
  { id: 40, name: 'Adaer', age: 19 },
  { id: 41, name: 'hele', age: 20 },
  { id: 42, name: 'hele', age: 20 },
  { id: 43, name: 'YOUYOU', age: 30 },
  { id: 44, name: 'xinzhang', age: 20 },
  { id: 45, name: 'Amada', age: 24 },
  { id: 46, name: 'Adaer', age: 19 },
  { id: 47, name: 'hele', age: 20 },
]
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  page = PAGE;
  public totalNum = this.page.length;  //总数据条数
  public pageSize = 7; //每页数条数
  public pageData = this.pageSize;  //每页数据
  public totalPage = Math.floor((this.totalNum - 1) / this.pageData) + 1;//总页数
  public curPage = 1;//当前页码
  getPageData(pageNo) {
    let self = this;
    self.curPage = pageNo;
    this.pageSize = this.pageData * pageNo;
  }


  data = Data;
  public totalNum1 = this.data.car.length;
  public pageSize1 = 6;
  public pageData1 = 6;
  public totalPage1 = Math.floor((this.totalNum1 - 1) / this.pageData1) + 1;//总页数
  public curPage1 = 1;//当前页码

  getPageData1(pageNo1) {
    console.log(pageNo1);
    let self = this;
    self.curPage1 = pageNo1;
    this.pageSize = this.pageData1 * pageNo1;
  }
  constructor() {
  }
}
