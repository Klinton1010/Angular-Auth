import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  specialEvents=[{name:'',description:'',date:''}];
  constructor(private _events:EventsService,private _route:Router) { }

  ngOnInit(): void {
    this._events.getSpecialEvents().subscribe(
      res=>this.specialEvents=res,
      err=>{ if (err instanceof HttpErrorResponse){
        if(err.status===401)
        {
          this._route.navigate(['/login']);
        }
      }}
    )
  }

}
