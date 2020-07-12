export interface ScoreResponse {
    Results: Output1Response;
}

export interface Output1Response {
    output1: Output[];
}

export interface Output {
    Rank: string;
    Title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    ReleaseDate: string;
    'Scored Labels': string;
}

export interface WeeksResponse {
    num_semana: string;
}

export interface PremiersResponse {
    value: Premiere[];
}

export interface Premiere {
    Cod_pelicula: string;
    title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    checked: boolean;
    ReleaseDate?: string;
    params?: any;
}

export interface CitiesResponse {
    value: City[];
}

export interface City {
    ciudad: string;
    id: number;
}

export interface Cinema {
    name: string;
}

export interface SuccessReponse {
    Result: string;
}

export interface PremiereSelected {
    num_semana: string;
    id_pelicula: string;
}

export interface GetPremieresForecast {
    value: PremiereForecast[];
}

export interface PremiereForecast {
    cod_forecast: number;
    id_movie: number;
    nom_pelicula: string;
}

export interface ParamsResponse {
    Value: Param[];
}

export interface Param {
    Id: string;
    Atributo: string;
    Type: string;
    value: string | string[];
    days?: Day[];
}

export interface Day {
    id: number;
    label: string;
    name: string;
    checked: boolean;
}

export interface PremiereToGenerateForecast  {
    Inputs: Premiere[];
    GlobalParameters: {};
}


