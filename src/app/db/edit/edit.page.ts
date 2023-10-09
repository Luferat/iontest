import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  view = false;

  form = {
    id: '',
    date: '2023-02-20 09:10:11',
    name: 'Treco',
    description: 'Apenas um treco.',
    image: 'https://picsum.photos/201',
    location: 'Em uma sala qualquer.',
    owner: 'vV4hOwydQDNb1vNqaxlNwN6ikQM2',
    views: 0,
    status: 'on',
    statusToggle: false
  }

  constructor() { }

  ngOnInit() {
    this.form.statusToggle = (this.form.status == 'on') ? true : false;
    this.view = true;
  }

}
