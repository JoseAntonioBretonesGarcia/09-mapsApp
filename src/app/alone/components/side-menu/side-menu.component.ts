import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  router: string;
  name: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [RouterModule,CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { router: '/maps/fullscreen', name: 'Full-Screen' },
    { router: '/maps/zoom-range', name: 'Zoom-Range' },
    { router: '/maps/markers', name: 'Markers' },
    { router: '/maps/properties', name: 'Houses' },
    { router: '/alone', name: 'Alone Page' },
  ];
}
