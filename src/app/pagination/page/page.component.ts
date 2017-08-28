import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent {
    @Input('pageParams') pageParams;
    @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;

    constructor() {
        let self = this;

    }
    getPageList(pageParams) {
        console.log(pageParams);
        pageParams = eval("pageParams");
        /**
         * 分页设置
         */
        let pageList = [];
        if (pageParams.totalPage <= pageParams.pageData) {   //如果总数小于pageData，直接将代码放进去
            //总数大于pageData，不用进来
            for (let i = 0; i < pageParams.totalPage; i++) {
                pageList.push({
                    pageNo: i + 1
                });
            }

        } else if (pageParams.totalPage - pageParams.curPage < pageParams.totalPage && pageParams.curPage > pageParams.totalPage - 1) {
            //如果总的页码数减去当前页码数小于页数差，那么直接计算出来显示
            for (let i = pageParams.curPage; i > pageParams.totalPage - pageParams.curPage; i--) {
                pageList.push({
                    pageNo: pageParams.curPage - i + 1
                });
            }
        } else {  //在中间的页码数
            for (let i = 0; i < pageParams.totalPage; i++) {
                pageList.push({
                    pageNo: i + 1
                });
            }
        }
        return pageList;
    }
    changePage(pageNo) {
        let self = this;
        self.pageParams.curPage = pageNo;  //当前页码
        self.changeCurPage.emit(self.pageParams.curPage);


    }

}
