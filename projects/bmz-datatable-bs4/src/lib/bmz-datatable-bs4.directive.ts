import {AfterViewInit, Directive, Input, OnInit} from '@angular/core';

declare var $: any;

@Directive({
    selector: 'table[bmzDatatableBs4]'
})
export class BmzDatatableBs4Directive implements OnInit, AfterViewInit {

    @Input() private id: string = '';
    @Input() private class: string = '';
    @Input() private fixedHeader: boolean = false;
    @Input() private searching: boolean = true;
    @Input() private paging: boolean = true;
    @Input() private groupColumn: boolean | number = false;
    @Input() private rowGroupObj: boolean | {} = false;
    @Input() private columnDefsObj: boolean | Array<any> = false;
    @Input() private order: Array<[number, string]> = [[0, 'asc']];

    @Input() private scrollY: boolean | string = false;
    @Input() private scrollX: boolean = false;
    @Input() private scrollCollapse: boolean = false;
    @Input() private fixedColumn: boolean = false;

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
                {"visible": false, "targets": this.groupColumn}
            ];
        }

        if(this.fixedColumn){
            this.scrollY = '300px';
            this.scrollX = true;
            this.scrollCollapse = true;
        }

        const opt = {
            fixedHeader: this.fixedHeader,
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

        console.log(opt);

        $('#' + this.id).DataTable(opt);

        setTimeout(() => {
            $('#' + this.id).DataTable().draw();
        }, 10);
    }

}
