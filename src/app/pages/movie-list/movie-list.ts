import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';

@Component({
    selector: 'app-movie-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './movie-list.html',
    styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
    private movieService = inject(MovieService);
    movies = signal<Movie[]>([]);

    // Form fields
    movieName = '';
    seatNumber = '';
    showTime = '';

    ngOnInit(): void {
        this.loadMovies();
    }

    loadMovies(): void {
        this.movieService.getAllMovies().subscribe({
            next: (data) => {
                this.movies.set(data);
            },
            error: (err) => {
                console.error('Error loading movies:', err);
            },
        });
    }

    addMovie(): void {
        const newMovie: Movie = {
            ticketId: 0,
            movieName: this.movieName,
            seatNumber: this.seatNumber,
            showTime: this.showTime,
        };

        this.movieService.createMovie(newMovie).subscribe({
            next: (createdMovie) => {
                this.movies.update(list => [...list, createdMovie]);
                this.movieName = '';
                this.seatNumber = '';
                this.showTime = '';
            },
            error: (err) => {
                console.error('Error creating movie:', err);
            },
        });
    }
}
