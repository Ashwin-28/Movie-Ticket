import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from '../models/parking.model';

@Injectable({
    providedIn: 'root',
})
export class ParkingService {
    private http = inject(HttpClient);
    private apiUrl = 'https://localhost:7055/api/Parking';

    getAllParking(): Observable<Parking[]> {
        return this.http.get<Parking[]>(this.apiUrl);
    }

    createParking(parking: Parking): Observable<Parking> {
        return this.http.post<Parking>(this.apiUrl, parking);
    }
}
