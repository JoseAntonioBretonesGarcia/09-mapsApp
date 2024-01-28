import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map, Marker} from 'mapbox-gl';
 

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPAgeComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;



  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    const coordsFavouritePlace = localStorage.getItem('coordsFavouritePlace') ?? "[-5.98,37.38]";
    console.log(coordsFavouritePlace)
    const lngLat = JSON.parse(coordsFavouritePlace);

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: lngLat, // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    const marker = new Marker({ color:'red', draggable: true })
    .setLngLat(lngLat)
    .addTo(map);
  }

}
