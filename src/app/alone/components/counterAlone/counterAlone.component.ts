import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counterAlone.component.html',
  styleUrls: ['./counterAlone.component.css'],
})
export class CounterAloneComponent {

  @Input()
  public counter : number = 10;
}
