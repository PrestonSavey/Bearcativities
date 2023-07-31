import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss'],
})
export class AddLocationComponent  implements OnInit {

  map:mapboxgl.Map;
  container: HTMLDivElement;

  constructor(map: mapboxgl.Map) {
    this.map = map;
  }

  ngOnInit() { }

  onAdd(map: mapboxgl.Map) {
      this.map = map;
      this.container = document.createElement('div');
      this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
      this.container.innerHTML = 
      `<button><span style="font-size: 20px; font-weight: 800;">&#43</span></button>`;
      this.container.addEventListener("contextmenu", e => e.preventDefault());
      this.container.addEventListener("click", () => this.openForm());
      return this.container;
  }
     
  onRemove() {
    this.container.parentNode!.removeChild(this.container);
  }

  openForm() {
    document.getElementById("locationType")!.style.display = "block";
  }
}
