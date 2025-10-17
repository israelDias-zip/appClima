
export interface CEPResponse {
    localidade: string;     // cidade
    uf: string;     // estado   
}

export interface GeoLocationResponse {
    latitude: number;     // latitude
    longitude: number;     // longitude
}

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    current: {
        temperatura: number; // temperatura em Celsius
        umidade_relativa: number; // umidade relativa em %
        codigo_clima: number; // código do clima
        velocidade_vento: number; // velocidade do vento em m/s
        timezone: string;   // fuso horário

    }
}

export interface BigDataCloudResponse { // Resposta da API BigDataCloud
        weather: WeatherResponse; // Descrição do clima
        city: string;       // Nome da cidade
        principalSubdivision: string; // O estado
}

export interface WeatherAndLocation { // Interface combinada
    weather: WeatherResponse;
    location: BigDataCloudResponse;
}
