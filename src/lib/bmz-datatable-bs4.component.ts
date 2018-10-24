import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

// import 'datatables.net';
// import 'datatables.net-bs4/js/dataTables.bootstrap4';
// import 'datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4';
// import {FixedHeader} from 'datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4';
// import {FixedColumns} from 'datatables.net-fixedcolumns-bs4/js/fixedColumns.bootstrap4.js';

import * as $ from 'jquery';

@Component({
    selector: 'bmz-datatable-bs4',
    templateUrl: './bmz-datatable-bs4.component.html',
    styleUrls: ['./bmz-datatable-bs4.component.scss']
})
export class BmzDatatableBs4Component implements OnInit, AfterViewInit {

    @Input() id: string;
    @Input() fixHeader: boolean = false;
    @Input() fixColumn: boolean = false;
    @Input() searching: boolean = true;
    @Input() paging: boolean = true;
    @Input() scrollX: boolean = true;
    @Input() class = 'table-striped table-bordered';

    constructor() {

    }

    ngOnInit() {

        console.log('ng oninit');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.initDatatable();
    }

    private initDatatable(): void {

        // let table = $('#' + this.id).DataTable({
        //     searching: this.searching,
        //     paging: this.paging
        // });
        // if (this.fixHeader) {
        //
        //     new FixedHeader(table);
        // }
    }

}
