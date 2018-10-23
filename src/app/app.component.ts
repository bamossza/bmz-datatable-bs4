import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

    title = 'bamossza-datatable';

    ngOnInit() {

        // $(document).ready(function () {
        //
        //

        // });

        // console.log('getDeviceName ==> ', utils.getDeviceName());
        // console.log('isDeviceIPad ==> ', utils.isDeviceIPad());
        // console.log('isDeviceTablet ==> ', utils.isDeviceTablet());
        // console.log('isDeviceMobile ==> ', utils.isDeviceMobile());
        // console.log('isDeviceDesktop ==> ', utils.isDeviceDesktop());
        // console.log('trim ==> ', utils.trim('     bamossza'));
        // console.log('strPadRight ==> ', utils.strPadRight('moss', 10, '9'));
        // console.log('strPadLeft ==> ', utils.strPadLeft('moss', 10, '9'));
        // console.log('PI ==> ', utils.PI());
        // console.log('abs ==> ', utils.abs(-1245));
        // console.log('uuidv4 ==> ', utils.uuidv4());
        // console.log('mergeArray ==> ', utils.mergeArray([{a: '1234'}, {b: '4321'}], [{b: '567'}, {b: '765'}]));
        // console.log('sumValueArray ==> ', utils.sumValueArray([1, 2, 3]));
    }

    ngAfterViewInit(): void {

        // $('#examplexxx').DataTable({
        //     scrollY: "300px",
        //     scrollX: true,
        //     scrollCollapse: true,
        //     paging: false,
        //     fixedColumns: true
        // });
        //
        // $('#exampleXxx2').DataTable( {
        //     order: [[1, 'asc']],
        //     rowGroup: {
        //         dataSrc: 2
        //     }
        // });
    }
}
