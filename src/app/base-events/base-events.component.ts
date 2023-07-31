import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-events',
  templateUrl: './base-events.component.html',
  styleUrls: ['./base-events.component.scss'],
})
export class BaseEventsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  getBaseEventLatLong() {
    let baseEventLatLong = 
    [
      [39.13135212973209, -84.51617935914764],
      [39.136575628711824, -84.50201650704301],
      [39.14286534289709, -84.50938152304653],
      [39.1357747856304, -84.51775521118361]
    ];
    return baseEventLatLong;
  }

  getBaseEventTitles() {
    let baseEventTitles = 
    [
      'UC vs. EKU',
      'Blood Drive',
      'Fritz\'s First Birthday',
      'Disc Golf'
    ];
    return baseEventTitles;
  }

  getBaseEventDates() {
    let baseEventDates = 
    [
      'September 2, 2023',
      'August 1, 2023',
      'August 3, 2023',
      'August 2, 2023'
    ];
    return baseEventDates;
  }

  getBaseEventTimes() {
    let baseEventTimes = 
    [
      '3:30 PM',
      'All Day',
      '10:00 AM',
      '12:00 PM'
    ];
    return baseEventTimes;
  }

  getBaseEventLocations() {
    let baseEventLocations = 
    [
      'Nippert Stadium',
      'Hoxworth Blood Center Central',
      'Cincinnati Zoo and Botanical Garden',
      'Burnet Woods'
    ];
    return baseEventLocations;
  }
}
