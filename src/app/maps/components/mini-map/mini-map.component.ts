import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css'],
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    if(!this.lngLat)  throw 'Las coordenadas no fueron encontradas';

     //LngLat
     const [lng,lat] = this.lngLat;
     const coords : LngLat = new LngLat(lng,lat);

    //Map
    const map = new Map({
      container: this.divMap.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: coords,
      zoom: 10,
      interactive: false
    });


    //Marker
    const marker = new Marker({ color:'red', draggable: true })
    .setLngLat(coords)
    .addTo(map);

  }
}
