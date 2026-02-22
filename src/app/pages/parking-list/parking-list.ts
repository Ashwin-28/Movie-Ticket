import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingService } from '../../services/parking.service';
import { Parking } from '../../models/parking.model';

@Component({
    selector: 'app-parking-list',
    imports: [CommonModule, FormsModule],
    templateUrl: './parking-list.html',
    styleUrl: './parking-list.css',
})
export class ParkingList implements OnInit {
    private parkingService = inject(ParkingService);
    parkingList = signal<Parking[]>([]);

    // Form fields
    ticketId = '';
    parkingSlot = '';
    customerName = '';
    vechicleNumber = '';

    ngOnInit(): void {
        this.loadParking();
    }

    loadParking(): void {
        this.parkingService.getAllParking().subscribe({
            next: (data) => {
                this.parkingList.set(data);
            },
            error: (err) => {
                console.error('Error loading parking:', err);
            },
        });
    }

    addParking(): void {
        const newParking: Parking = {
            ticketId: this.ticketId,
            parkingSlot: this.parkingSlot,
            customerName: this.customerName,
            vechicleNumber: this.vechicleNumber,
        };

        this.parkingService.createParking(newParking).subscribe({
            next: (createdParking) => {
                this.parkingList.update(list => [...list, createdParking]);
                this.ticketId = '';
                this.parkingSlot = '';
                this.customerName = '';
                this.vechicleNumber = '';
            },
            error: (err) => {
                console.error('Error creating parking:', err);
            },
        });
    }
}
