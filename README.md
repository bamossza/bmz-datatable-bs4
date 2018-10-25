# Bamossza Datatable Bootstrap 4

Angular Datatable Bootstrap 4

![alt bmz-logo](https://tool.bamossza.com/assets/images/logo/m32_.png)

support angular 6 or above for developer.

### Prerequisites

The project should be using bootstrap 4 already.

### Installing

Easily a step by step will be:

Datatable Core and Jquery
```
npm i jquery
npm i datatables.net-bs4       
npm i datatables.net-fixedcolumns-bs4
npm i datatables.net-fixedheader-bs4
npm i datatables.net-rowgroup-bs4
```

Bmz Lib

```
npm i bmz-datatable-bs4
```

In the root project, Open angular.json file.

Look up Styles[] add below.
```
"styles": [
    "src/styles.scss",
    "node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css",
    "node_modules/datatables.net-fixedcolumns-bs4/css/fixedColumns.bootstrap4.css",
    "node_modules/datatables.net-rowgroup-bs4/css/rowGroup.bootstrap4.css",
    "node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.css"
]
```

Look up Script[] add below.
```
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/datatables.net/js/jquery.dataTables.js",
    "node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js",
    "node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js",
    "node_modules/datatables.net-fixedcolumns-bs4/js/fixedColumns.bootstrap4.js",
    "node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js",
    "node_modules/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.js",
    "node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.js",
    "node_modules/datatables.net-rowgroup-bs4/js/rowGroup.bootstrap4.js"
]
```

### How to using

```

Bmz Lib is an auto create table body, following below.

Attr >> bmzDatatableBs4

const rows = [
{
    order: 1,
    orderName: 'Coffee'
},
{
    order: 2,
    orderName: 'Tea'
}];

-------------------------

const columns = [
{
    data: 'order',
    class: 'text-center'
},
{
    data: 'orderName'
}];

-------------------------

<table bmzDatatableBs4
    [fixedColumn]="true"
    [fixedColumnLeft]="2"
    [rows]="rows"
    [columns]="columns"
    id="table-fixed-columns"
    class="table table-striped table-bordered"
    style="width:100%">
    <thead>
        <tr>
            <th>Order</th>
            <th>Order Name</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

```

## Attribute can used

| Ng Attr       | Type                      | Default |
| :---          |     :---:                 |   :---:  |
| id (Required) | string                    |         |
| class         | string                    |         |
| groupColumn   | number (Start 1) or string                   |         |
| hideColumn        | number (Start 1)      |     |
| fixedHeader   | boolean                   | false   |
| fixedHeaderOffset   | number                   | 0   |
| fixedColumn   | boolean                   | false   |
| fixedColumnLeft   | number (Start 1)                   | 0   |
| fixedColumnRight   | number (Start 1)                   | 0   |
| searching     | boolean                   | true    |
| paging        | boolean                   | true    |
| order         | Array<[number, string]> (Start 0)  | [[0, 'asc']] |
| orderFixed    | Array<[number, string]> (Start 0)  | false |
| scrollX       | boolean                   | false   |
| scrollY       | string                    | 300px   |
| scrollCollapse | boolean                  | false   |
| rows          | Array<Object>                  | []   |
| columns       | Array<[data: string, class: string]>  | []   |

## Example

##### Fixed Header when down ↓ scrollbar 

![alt bmz-logo](https://bamossza.com/static/images/exam-ng-datatable-bs4-1.png)

##### Row Group

![alt bmz-logo](https://bamossza.com/static/images/exam-ng-datatable-bs4.png)

## Changelog

[Learn about the latest improvements.](https://github.com/bamossza/bmz-datatable-bs4/blob/master/CHANGELOG.md)

## Authors

* **[Panusitt Khuenkham](https://github.com/bamossza)**

## Further information

* [Angular docs](https://angular.io)
* [jQuery](https://jquery.com/)
* [Datatables](https://datatables.net)

## Profiles

* [Bamossza Website](https://bamossza.com)
* [Tool for Developer](https://tool.bamossza.com)
* [Blog Medium](https://medium.com/@bamossza)
* [Stack Overflow](https://stackoverflow.com/users/3863070/bamossza)
