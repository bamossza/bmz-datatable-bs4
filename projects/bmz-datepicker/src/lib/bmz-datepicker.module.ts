import {NgModule} from '@angular/core';
import {BmzDatepickerComponent} from './bmz-datepicker.component';
import {BsDatepickerModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        BsDatepickerModule.forRoot()
    ],
    declarations: [BmzDatepickerComponent],
    exports: [BmzDatepickerComponent]
})
export class BmzDatepickerModule {
}
