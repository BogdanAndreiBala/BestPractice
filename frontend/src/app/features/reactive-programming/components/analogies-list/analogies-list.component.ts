
import { Component, Input } from '@angular/core';
import { RxjsTopic } from '../../models/rxjs.model';

@Component({
  selector: 'app-analogies-list',
  standalone: true,
  imports: [],
  templateUrl: './analogies-list.component.html',
  styleUrls: ['./analogies-list.component.scss'],
})
export class AnalogiesListComponent {
  @Input() topics: RxjsTopic[] = [];
}
