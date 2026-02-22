import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-moviecard-comp',
  imports: [],
  templateUrl: './moviecard-comp.html',
  styleUrl: './moviecard-comp.css',
})
export class MoviecardComp {
  @Input() movie!: Movie;
}
