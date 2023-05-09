import { Component, OnInit } from '@angular/core';

import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  
  selector: 'app-sh',

 templateUrl: './sh.component.html',
  styleUrls: ['./sh.component.css']
  
})
export class ShComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

}
