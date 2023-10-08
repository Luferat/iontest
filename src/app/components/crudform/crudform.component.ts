import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.scss'],
})
export class CrudformComponent implements OnInit {

  @Input() form: any;
  @Input() action: string | undefined;

    constructor() { }

  ngOnInit() {

    

  }

  change() { }

}
