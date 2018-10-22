import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BmzDatatableBs4Module} from '../../projects/bmz-datatable-bs4/src/lib/bmz-datatable-bs4.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BmzDatatableBs4Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
