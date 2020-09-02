import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {JokeDto} from "../../models/joke.model";

@Component({
  selector: 'app-jokes-list-item',
  templateUrl: './jokes-list-item.component.html',
  styleUrls: ['./jokes-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesListItemComponent implements OnInit {

  @Input() joke: JokeDto;

  constructor() { }

  ngOnInit(): void {
  }

}
