import {AfterViewInit, Directive, Input, OnInit} from '@angular/core';

declare var $: any;

@Directive({
    selector: '[bmzDatatableBs4]'
})
export class BmzDatatableBs4Directive implements OnInit, AfterViewInit {

    @Input() private id = '';
    @Input() private class = '';
    @Input() private fixedHeader = false;
    @Input() private fixedHeaderOffset = 0;
    private fixedHeaderObj: boolean | {} = false;
    @Input() private searching = true;
    @Input() private paging = true;
    @Input() private groupColumn: boolean | number = false;
    private rowGroupObj: boolean | {} = false;
    private columnDefsObj: boolean | Array<any> = false;
    @Input() private order: Array<[number, string]> = [[0, 'asc']];

    @Input() private scrollY: boolean | string = false;
    @Input() private scrollX = false;
    @Input() private scrollCollapse = false;
    @Input() private fixedColumn = false;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        if (this.id === '') {
            alert('Please define table id.');
        } else {

            this.initDatatable();
        }
    }

    private initDatatable(): void {

        if (this.groupColumn) {
            this.rowGroupObj = {
                dataSrc: this.groupColumn
            };
            this.columnDefsObj = [
                {'visible': false, 'targets': this.groupColumn}
            ];
        }

        if (this.fixedColumn) {
            this.scrollY = '300px';
            this.scrollX = true;
            this.scrollCollapse = true;
        }

        if (this.fixedHeader) {
            this.fixedHeaderObj = {
                headerOffset: this.fixedHeaderOffset
            };
        }

        const opt = {
            fixedHeader: this.fixedHeaderObj,
            searching: this.searching,
            paging: this.paging,
            order: this.order,
            rowGroup: this.rowGroupObj,
            columnDefs: this.columnDefsObj,
            fixedColumns: this.fixedColumn,
            scrollX: this.scrollX,
            scrollY: this.scrollY,
            scrollCollapse: this.scrollCollapse
        };

        $('#' + this.id).DataTable(opt);

        setTimeout(() => {
            $('#' + this.id).DataTable().draw();
        }, 10);
    }

}
