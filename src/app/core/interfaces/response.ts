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
    id: number;
    num_semana: string;
}

export interface PremiersResponse {
    value: Premiere[];
}

/* export interface Premiere {
    Cod_pelicula: string;
    title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    checked: boolean;
    ReleaseDate?: string;
    params?: any;
} */

export interface Premiere {
    id_pelicula: number;
    cod_pelicula: string;
    titulo: string;
    id_rating: string;
    id_distributor: string;
    id_genero: string;
    checked: boolean;
    ReleaseDate?: string;
    params?: any;
}

export interface CitiesResponse {
    value: City[];
}

export interface City {
    nom_ciudad: string;
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
    id_semana: string;
    id_pelicula: string;
    id_ciudad: number;
}

export interface GetPremieresForecast {
    Value: PremiereForecast[];
}


export interface PremiereForecast {
    id_forecast: number;
    cod_forecast: string;
    id_movie: number;
    nom_pelicula: string;
    asistencia: number;
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
        genre: string;
        cens: string;
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

export interface GeneratedForecast {
    cod_forecast: number;
}


export interface GeneratedSchedule {
    cod_forecast: number;
    status: string;
}
