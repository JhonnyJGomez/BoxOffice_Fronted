export interface GetPremieresForecastResponse {
    Value: PremiereForecast[];
}

export interface PremiereForecast {
    asistencia: number;
    cod_forecast: string;
    cod_pelicula: string;
    id_forecast: number;
    id_movie: number;
    nom_pelicula: string;
}
