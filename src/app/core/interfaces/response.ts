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

export interface CinemaResponse {
    value: Cinema[];
}

export interface Cinema {
    cod_ciudad: number;
    id: string;
    nom_cine: string;
    ticket_promedio: number;
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
    forecast: number;
    participacion: number;
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

export interface ParamsProgramResponse {
    value: ParamProgram[];
}

export interface ParamProgram {
    Id: string;
    Atributo: string;
    Type: string;
    value: string | boolean | boolean[];
}

export interface ParamProgramToSave {
    value: {
        id_forecast: number;
        id_parametro: number;
        value: boolean | string;
    }[];
}

export interface SaveForecastData {
    forecast: number;
}

export interface Schedule {
    days: {
        id: number;
        day: string;
    }[];
    id_cine: string;
    id_forecast: string;
    id_semana: string;
    movies: {
        id_movie: number;
        title: string;
        shows: {
            day: number;
            final: string;
            screen: number;
            screen_cap: string;
            start: string;
            time: number;
        }[];
    }[];
    nom_cine: string;
    times: {
        id: number;
        time: string;
        start: string;
        end: string;
    }[];
    screens: {
        id: number;
        screen: string;
        cap: number;
    }[];
}
