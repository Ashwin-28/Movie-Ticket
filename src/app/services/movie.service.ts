import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private http = inject(HttpClient);
    private apiUrl = '/api/Movie';

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.apiUrl);
    }

    createMovie(movie: Movie): Observable<Movie> {
        return this.http.post<Movie>(this.apiUrl, movie);
    }
}
