
export interface CEPResponse {
    cidade: string;     // cidade
    uf: string;     // estado   
}

export interface GeoLocationResponse {
    latitude: number;     // latitude
    longitude: number;     // longitude
}

export interface WeatherResponse {
    current: {
        temperatura: number; // temperatura em Celsius
        umidade_relativa : number; // umidade relativa em %
        codigo_clima: number; // código do clima
        velocidade_vento: number; // velocidade do vento em m/s
        horario_medicao: string;

    }
 }