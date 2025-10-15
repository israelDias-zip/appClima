import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CEPResponse, GeoLocationResponse, WeatherResponse } from './api.interfaces';

//Função pura para validar CEP
function isValidCEP(cep: string): boolean {
  return /^[0-9]{8}$/.test(cep); // Verifica se tem 8 dígitos numéricos
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
// Função principal para obter o clima
  getWeather(location: string): Observable<WeatherResponse> {
    if (isValidCEP(location)) { // Se for um CEP válido
      return this.getCityFromCEP(location).pipe(
        switchMap(cityName => this.getCoordsFromCity(cityName)),
        switchMap(coords => this.getWeatherFromCoords(coords.latitude, coords.longitude))
      );
    } else { // Se for um nome de cidade
      return this.getCoordsFromCity(location).pipe(
        switchMap(coords => this.getWeatherFromCoords(coords.latitude, coords.longitude))
      );
    }
  }

  private getCityFromCEP(cep: string): Observable<string> {
    // Consulta a API do ViaCEP para obter o nome da cidade
    return this.http.get<CEPResponse>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
      map(response => response.localidade)
    );
  }

  private getCoordsFromCity(city: string): Observable<GeoLocationResponse> {
    // Consulta a API de geocodificação para obter latitude e longitude
   return this.http.get<any>(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`).pipe(
      map(response => {
        if (!response.results || response.results.length === 0) {
          throw new Error('Cidade não encontrada');
        } return {
          latitude: response.results[0].latitude,
          longitude: response.results[0].longitude
        };
      })
      );
  }

  private getWeatherFromCoords(lat: number, lon: number): Observable<WeatherResponse> {
    // Consulta a API de clima para obter o clima atual
   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
    return this.http.get<WeatherResponse>(url);
  }
}