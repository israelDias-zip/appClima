import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
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
  errorMensage: string | null = null;
  weatherData: any = null;
  displayLocation: any = null;

  constructor(private apiService: ApiService) { }

  searchWeather() { // Função para buscar o clima
    this.isLoading = true;
    this.errorMensage = null;
    this.weatherData = null;
    this.locationInput;

    this.apiService.getWeather(this.locationInput).pipe( // Chama o serviço para obter o clima
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: (data) => {
        this.weatherData = data; // Armazena os dados do clima
        this.apiService.getCityFromCoords(data.latitude, data.longitude).subscribe({ // Obtém o nome da cidade a partir das coordenadas
          next: (location) => {
            this.displayLocation = location; 
          },
          error: (err) => {
            this.errorMensage = 'Erro ao obter a localização.';
            console.error(err);
          }
        });
      },
      error: (err) => {
        this.errorMensage = 'Erro ao obter os dados do clima. Verifique o CEP ou nome da cidade.';
        console.error(err);
      }
    });
  }

}
