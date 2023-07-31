import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-businesses',
  templateUrl: './base-businesses.component.html',
  styleUrls: ['./base-businesses.component.scss'],
})
export class BaseBusinessesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  getBaseBusinessLatLong() {
    let baseBusinessLatLong = 
    [
      [39.12476874953092, -84.51989239776205],
      [39.12787222751087, -84.51975853402385],
      [39.1276821649223, -84.51641903402383],
      [39.12997927451156, -84.50932154565757],
      [39.1285997621028, -84.51998650333083],
      [39.13035644160655, -84.50915833216739],
      [39.130691365786454, -84.50951467078151],
      [39.14016011307457, -84.51265693451916],
      [39.143763297113, -84.52004044565685]
    ];
    return baseBusinessLatLong;
  }

  getBaseBusinessNames() {
    let baseBusinessNames = 
    [
      'Murphy\'s',
      'Mac\'s',
      'Adriatico\'s',
      'Martino\'s',
      'Uncle Woody\'s',
      'Mio\'s',
      'Ladder 19',
      'Corinthian',
      'Los Potrillos'
    ];
      return baseBusinessNames;
  }

  getBaseBusinessAddresses() {
    let baseBusinessAddresses = 
    [
      '2329 W Clifton Ave, Cincinnati, OH 45219',
      '205 W McMillan St, Cincinnati, OH 45219',
      '113 W McMillan St, Cincinnati, OH 45219',
      '2618 Short Vine St, Cincinnati, OH 45219',
      '339 Calhoun St, Cincinnati, OH 45219',
      '2634 Short Vine St, Cincinnati, OH 45219',
      '2701 Short Vine St, Cincinnati, OH 45219',
      '3253 Jefferson Ave, Cincinnati, OH 45220',
      '316 Ludlow Ave, Cincinnati, OH 45220'
    ];
    return baseBusinessAddresses;
  }

  getBaseBusinessPhoneNumbers() {
    let baseBusinessPhoneNumbers = 
    [
      '+15137216148',
      '+15132416227',
      '+15132814344',
      '+15132218487',
      '+15137512518',
      '+15132816467',
      'N/A',
      '+15139610013',
      '+15132210313'
    ];
    return baseBusinessPhoneNumbers;
  }

  getBaseBusinessWebsites() {
    let baseBusinessWebsites = 
    [
      'http://www.murphys-pub.com/',
      'https://macspizzapub.com/',
      'http://adriaticosuc.com/',
      'http://www.martinosonvine.com/',
      'http://unclewoodys.net/',
      'https://www.miosclifton.com/',
      'N/A',
      'http://corinthianrestaurant.com/',
      'http://www.lospotrillosuc.com/'
    ];
    return baseBusinessWebsites;
  }

  getBaseBusinessHours() {
    let baseBusinessHours = 
    [
      '&emsp; Sunday, 12 PM–2:30 AM<br>&emsp; Monday, 3 PM–2:30 AM<br>&emsp; Tuesday, 3 PM–2:30 AM<br>&emsp; Wednesday, 3 PM–2:30 AM<br>&emsp; Thursday, 3 PM–2:30 AM<br>&emsp; Friday, 2 PM–2:30 AM<br>&emsp; Saturday, 12 PM–2:30 AM',
      '&emsp; Sunday, 11 AM–2 AM<br>&emsp; Monday, 11 AM–2 AM<br>&emsp; Tuesday, 11 AM–2 AM<br>&emsp; Wednesday, 11 AM–2 AM<br>&emsp; Thursday, 11 AM–2 AM<br>&emsp; Friday, 11 AM–2 AM<br>&emsp; Saturday, 11 AM–2 AM',
      '&emsp; Sunday, 11 AM–10 PM<br>&emsp; Monday, 11 AM–11 PM<br>&emsp; Tuesday, 11 AM–11 PM<br>&emsp; Wednesday, 11 AM–11 PM<br>&emsp; Thursday, 11 AM–11 PM<br>&emsp; Friday, 11 AM–12 AM<br>&emsp; Saturday, 11 AM–12 AM',
      '&emsp; Sunday, 11 AM–8 PM<br>&emsp; Monday, 11 AM–10 PM<br>&emsp; Tuesday, 11 AM–10 PM<br>&emsp; Wednesday, 11 AM–10 PM<br>&emsp; Thursday, 11 AM–2 AM<br>&emsp; Friday, 11 AM–2 AM<br>&emsp; Saturday, 11 AM–2 AM',
      '&emsp; Sunday, Closed<br>&emsp; Monday, Closed<br>&emsp; Tuesday, Closed<br>&emsp; Wednesday, 5 PM–2 AM<br>&emsp; Thursday, 8 PM–2 AM<br>&emsp; Friday, 5 PM–2 AM<br>&emsp; Saturday, 2 PM–2 AM',
      '&emsp; Sunday, 12–11 PM<br>&emsp; Monday, 11 AM–11 PM<br>&emsp; Tuesday, 11 AM–11 PM<br>&emsp; Wednesday, 11 AM–12 AM<br>&emsp; Thursday, 11 AM–12 AM<br>&emsp; Friday, 11 AM–12 AM<br>&emsp; Saturday, 11 AM–12 AM',
      '&emsp; Sunday, Closed<br>&emsp; Monday, 11 AM–2:30 AM<br>&emsp; Tuesday, 11 AM–2:30 AM<br>&emsp; Wednesday, 11 AM–2:30 AM<br>&emsp; Thursday, 11 AM–2:30 AM<br>&emsp; Friday, 11 AM–2:30 AM<br>&emsp; Saturday, 10 AM–2:30 AM',
      '&emsp; Sunday, Closed<br>&emsp; Monday, Closed<br>&emsp; Tuesday, 4 PM–2:30 AM<br>&emsp; Wednesday, 4 PM–2:30 AM<br>&emsp; Thursday, 4 PM–2:30 AM<br>&emsp; Friday, 4 PM–2:30 AM<br>&emsp; Saturday, 4 PM–1:30 AM',
      '&emsp; Sunday, 11 AM–9:30 PM<br>&emsp; Monday, 11 AM–10 PM<br>&emsp; Tuesday, 11 AM–10 PM<br>&emsp; Wednesday, 11 AM–10 PM<br>&emsp; Thursday, 11 AM–10 PM<br>&emsp; Friday, 11 AM–11 PM<br>&emsp; Saturday, 11 AM–11 PM'
    ];
    return baseBusinessHours;
  }

  getBaseBusinessDeals() {
    let baseBusinessDeals = 
    [
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; Happy Hour is Weekdays 3-6 PM<br>&emsp; Monday: $10 Margaritas<br>&emsp; Tuesday: $5 Two-Hearted IPA<br>&emsp; Wednesday: $5 Glasses of Wine<br>&emsp; Thursday: Wells 75&cent Off',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; Happy Hour is Everyday 5-8 PM<br>&emsp; Wednesday: $5 Liquor Pitchers, $2 Tequila Shots<br>&emsp; Thursday: $5 Doubles, $2 Bartender Shots<br>&emsp; Friday: $3 Fireball Shots, $1 Natural Lights<br>&emsp; Saturday: $7 Big Cups',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; ',
      '&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; <br>&emsp; '
    ];
    return baseBusinessDeals;
  }
}
