import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { finalize } from 'rxjs/operators';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, DatePipe, IonIcon],
})
export class HomePage {
  locationInput: string = '';
  isLoading: boolean = false;
  errorMensage: any = null;
  weatherData: any = null;
  displayLocation: string = '';

  constructor(private apiService: ApiService) {}

  searchWeather() {
    this.isLoading = true;
    this.errorMensage = null;
    this.weatherData = null;
    this.displayLocation = this.locationInput;

    this.apiService.getWeather(this.locationInput).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.errorMensage = 'Erro ao buscar o clima. Verifique o CEP ou nome da cidade.';
        console.error(err);
      }
    });
  }
}
