import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { MoviecardComp } from '../../components/moviecard-comp/moviecard-comp';

@Component({
    selector: 'app-movie-list',
    imports: [CommonModule, FormsModule, MoviecardComp],
    templateUrl: './movie-list.html',
    styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
    private movieService = inject(MovieService);
    movies = signal<Movie[]>([]);

    // Form
    movieName = '';
    seatNumber = '';
    showTime = '';
    price = 0;
    totalSeats = 0;

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
            price: this.price,
            totalSeats: this.totalSeats
        };

        this.movieService.createMovie(newMovie).subscribe({
            next: (createdMovie) => {
                this.movies.update(list => [...list, createdMovie]);
                // Reset form
                this.movieName = '';
                this.seatNumber = '';
                this.showTime = '';
                this.price = 0;
                this.totalSeats = 0;
            },
            error: (err) => {
                console.error('Error creating movie:', err);
            },
        });
    }
}