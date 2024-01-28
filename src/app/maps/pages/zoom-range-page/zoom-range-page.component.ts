import { Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 7;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-5.98, 37.38);

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  mapListeners(){
    if(!this.map) throw 'Mapa no inicializado';
    this.map.on('zoom',(ev)=>{
      this.zoom = this.map!.getZoom();
    })
    this.map.on('zoomend',(ev)=>{
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })

    this.map.on('move',()=>{
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChange(zoomValue : string) {
    this.zoom = Number(zoomValue);
    this.map?.zoomTo(this.zoom);
  }
}
