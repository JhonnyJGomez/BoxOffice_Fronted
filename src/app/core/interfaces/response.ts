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

export interface Premiere {
    cod_pelicula: string;
    id: number;
    id_distributor: number;
    id_genero: number;
    id_rating: number;
    titulo: string;
}


export interface PremiereResponse {
    value: PremiereResponseForecast[];
}

export interface PremiereResponseForecast {
    Rank: string;
    Title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    ReleaseDate?: string;
    value: number;
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

export interface Param {
    id: string;
    cod_parametro: string;
    type: string;
    value: string | string[];
    days?: Day[];
}

export interface Day {
    id: number;
    label: string;
    name: string;
    checked: boolean;
}

export interface PremiereToGenerateForecast {
    Inputs: PremiereForecast[];
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
    Results: {
        output1: [{}];
    };
}

export interface GeneratedSchedule {
    cod_forecast: number;
    status: string;
}
