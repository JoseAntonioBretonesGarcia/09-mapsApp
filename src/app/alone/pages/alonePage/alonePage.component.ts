import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counterAlone/counterAlone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [CommonModule, CounterAloneComponent,SideMenuComponent],
  templateUrl: './alonePage.component.html',
  styleUrls: ['./alonePage.component.css'],
})
export class AlonePageComponent {
  
}
