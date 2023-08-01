import { environment } from '../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { AddLocationComponent } from '../add-location/add-location.component';
import { BaseBusinessesComponent } from '../base-businesses/base-businesses.component';
import { BaseEventsComponent } from '../base-events/base-events.component';
import { Comment } from '../models/comments';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  map: mapboxgl.Map;
  baseBusinesses: BaseBusinessesComponent;
  baseEvents: BaseEventsComponent;
  addLocation: AddLocationComponent;
  numBusinesses: number = 9;
  comments: Comment[];
  eventComments: Comment[];
  currentUser: string = "testUser";
  newComment: string = "";
  newEventComment: string = "";
  constructor() {
    this.baseBusinesses = new BaseBusinessesComponent();
    this.baseEvents = new BaseEventsComponent();
    this.addLocation = new AddLocationComponent(this.map);
  }

  ngOnInit() {
    let comment1: Comment = {
      user: "John",
      comment: "Woody's is awesome"
    }
    let comment2: Comment = {
      user: "Tim",
      comment: "My girlfriend got a higher score on the punching bag. I do not recommend"
    }
    let comment3: Comment = {
      user: "Rachel",
      comment: "Are there lemon drops just lemonade?"
    }
    let eventComment1: Comment = {
      user: "BearcatBoi",
      comment: "EKU is full of scrubs"
    }
    let eventComment2: Comment = {
      user: "Johnny",
      comment: "Easy Pickins"
    }
    let eventComment3: Comment = {
      user: "Rachel",
      comment: "When is football season?"
    }
    this.comments = [comment1, comment2, comment3];
    this.eventComments = [eventComment1, eventComment2, eventComment3];
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 14,
      center: [-84.50991954717016, 39.135353754921425]
      });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: false
    }));
    // Removes default POI layer
    this.map.on('load', () => {
      this.map.removeLayer('poi-label');
      this.addBaseMarkers();
      this.map.addControl(this.addLocation, "top-right");
      document.getElementById("business")?.addEventListener("click", () => this.openBusinessForm());
      document.getElementById("event")?.addEventListener("click", () => this.openEventForm());
    });
    this.map.once('load', () => {
      this.map.resize();
  });

  }

  addBaseMarkers() {
    for (let i = 0; i < 9; i++) {
      let businessMarker = new mapboxgl.Marker({
        color: '#0000FF'
      });
      businessMarker.setLngLat([this.baseBusinesses.getBaseBusinessLatLong()[i][1], this.baseBusinesses.getBaseBusinessLatLong()[i][0]])
      .setPopup(new mapboxgl.Popup({
        closeButton: false,
        maxWidth: '300px'
      }).setHTML(
        `<head>
          <style>
            .popup-container {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 300px;
              padding: 20px;
              background-color: #fff;
              border: 2px solid red;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              z-index: 9999;
              height: 300px;
              overflow-y: auto;
            }
            .location-name h2 {
              margin-top: 0;
              margin-bottom: 10px;
              color: red;
            }
            .location-info p {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="popup-container">
            <div class="location-name">
              <h2>${this.baseBusinesses.getBaseBusinessNames()[i]}</h2>
            </div>
            <div class="location-info">
              <p>${this.baseBusinesses.getBaseBusinessAddresses()[i]}</p>
              <p>${this.baseBusinesses.getBaseBusinessPhoneNumbers()[i]}</p>
              <p>${this.baseBusinesses.getBaseBusinessWebsites()[i]}</p>
              <p>Hours:<br>${this.baseBusinesses.getBaseBusinessHours()[i]}</p>
              <p>Deals:<br>${this.baseBusinesses.getBaseBusinessDeals()[i]}</p>
            </div>
          </div>
        </body>`
      )).addTo(this.map);
    }
    for (let i = 0; i < 4; i++) {
      let eventMarker = new mapboxgl.Marker({
        color: '#FF0000'
      });
      eventMarker.setLngLat([this.baseEvents.getBaseEventLatLong()[i][1], this.baseEvents.getBaseEventLatLong()[i][0]])
      .setPopup(new mapboxgl.Popup({
        closeButton: false,
        maxWidth: '300px'
      }).setHTML(
        `<head>
          <style>
            .popup-container {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 300px;
              padding: 20px;
              background-color: #fff;
              border: 2px solid red;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              z-index: 9999;
            }
            .location-name h2 {
              margin-top: 0;
              margin-bottom: 10px;
              color: red;
            }
            .location-info p {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="popup-container">
            <div class="location-name">
              <h2>${this.baseEvents.getBaseEventTitles()[i]}</h2>
            </div>
            <div class="location-info">
              <p>${this.baseEvents.getBaseEventDates()[i]}</p>
              <p>${this.baseEvents.getBaseEventTimes()[i]}</p>
              <p>${this.baseEvents.getBaseEventLocations()[i]}</p>
            </div>
          </div>
        </body>`
      )).addTo(this.map);
    }
  }
  addNewComment(){
    let newComment = {
      user: this.currentUser,
      comment: this.newComment
    }
    this.comments.push(newComment);
  }
  addNewEventComment(){
    let newComment = {
      user: this.currentUser,
      comment: this.newEventComment
    }
    this.eventComments.push(newComment);
  }
  openBusinessForm() {
    document.getElementById("locationType")!.style.display = "none";

    document.getElementById("businessType")!.style.display = "block";

    document.getElementById("submit1")?.addEventListener("click", () => this.closeForm());
    document.getElementById("cancel1")?.addEventListener("click", () => this.closeForm());
  }

  openEventForm() {
    document.getElementById("locationType")!.style.display = "none";

    document.getElementById("eventType")!.style.display = "block";

    document.getElementById("submit2")?.addEventListener("click", () => this.closeForm());
    document.getElementById("cancel2")?.addEventListener("click", () => this.closeForm());
  }

  closeForm() {
    document.getElementById("businessType")!.style.display = "none";
    document.getElementById("eventType")!.style.display = "none";
  }
}

