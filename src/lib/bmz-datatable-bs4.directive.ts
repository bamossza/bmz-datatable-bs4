import {AfterViewInit, Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

declare var $: any;

@Directive({
    selector: '[bmzDatatableBs4]'
})
export class BmzDatatableBs4Directive implements OnInit, AfterViewInit, OnDestroy {

    private _rows = new Subject<any>();
    private subscription: Subscription;
    @Input() private columns: Array<{ data: string, class: string }> = [];
    @Input() private id = '';
    @Input() private class = '';
    @Input() private fixedHeader = false;
    @Input() private fixedHeaderOffset = 0;
    private fixedHeaderObj: boolean | {} = false;
    @Input() private searching = true;
    @Input() private paging = true;
    @Input() private groupColumn: boolean | number | string = false;
    @Input() private hideColumn: boolean | number = false;
    private rowGroupObj: boolean | {} = false;
    private columnDefsObj: boolean | Array<any> = false;
    @Input() private order: Array<[number, string]> = [[0, 'asc']];
    @Input() private orderFixed: Array<[number, string]> | false = false;
    @Input() private scrollY: boolean | string = false;
    @Input() private scrollX = false;
    @Input() private scrollCollapse = false;
    @Input() private fixedColumn = false;
    @Input() private fixedColumnLeft = 0;
    @Input() private fixedColumnRight = 0;
    private fixedColumnObj: boolean | {} = false;

    constructor() {
    }

    ngOnInit() {

    }

    @Input('rows')
    set rows(value) {
        this._rows.next(value);
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
        }

        this.columnDefsObj = [
            {'visible': false, 'targets': typeof this.hideColumn === 'number' ? this.hideColumn - 1 : this.hideColumn}
        ];

        if (this.fixedColumn) {
            this.scrollY = '300px';
            this.scrollX = true;
            this.scrollCollapse = true;
            this.fixedColumnObj = {
                leftColumns: this.fixedColumnLeft,
                rightColumns: this.fixedColumnRight
            };
        }

        if (this.fixedHeader) {
            this.fixedHeaderObj = {
                headerOffset: this.fixedHeaderOffset
            };
        }

        const opt = {
            select: 'single',
            fixedHeader: this.fixedHeaderObj,
            searching: this.searching,
            paging: this.paging,
            order: this.order,
            orderFixed: this.orderFixed,
            rowGroup: this.rowGroupObj,
            columnDefs: this.columnDefsObj,
            fixedColumns: this.fixedColumnObj,
            scrollX: this.scrollX,
            scrollY: this.scrollY,
            scrollCollapse: this.scrollCollapse,
            data: [],
            columns: this.columns,
            destroy: true
        };

        this.subscription = this._rows
            .subscribe(r => {
                opt.data = r;
                const table = $('table#' + this.id).DataTable(opt);

                $('table#' + this.id + ' tbody').on('click', 'td.details-control', function () {
                    let tr = $(this).closest('tr');
                    let row = table.row(tr);

                    if (row.child.isShown()) {
                        // This row is already open - close it
                        row.child.hide();
                        tr.removeClass('shown');
                    } else {
                        // Open this row
                        row.child(this.format(opt.data)).show();
                        tr.addClass('shown');
                    }
                });
            });
    }

    format(d) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
            '<tr>' +
            '<td>Full name:</td>' +
            '<td>' + '' + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extension number:</td>' +
            '<td>' + '' + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>Extra info:</td>' +
            '<td>And any further details here (images etc)...</td>' +
            '</tr>' +
            '</table>';
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
