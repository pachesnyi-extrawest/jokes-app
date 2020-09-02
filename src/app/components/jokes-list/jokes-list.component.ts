import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {JokeDto} from "../../models/joke.model";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesListComponent implements OnInit {

  @Input() jokes$: Observable<JokeDto[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
