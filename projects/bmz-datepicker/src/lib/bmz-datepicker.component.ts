import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmz-datepicker',
  template: `
      <input type="text"
             placeholder="Datepicker"
             class="form-control"
             bsDatepicker>
  `,
  styleUrls: ['./bmz-datepicker.component.css']
})
export class BmzDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
