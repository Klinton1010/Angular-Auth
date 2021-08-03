import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _events:EventsService) { }
  events=[{name:'',description:'',date:''}];

  ngOnInit(): void {
    this._events.getEvents().subscribe
    (res=>this.events=res,
    err=>console.log(err));
  }

}
