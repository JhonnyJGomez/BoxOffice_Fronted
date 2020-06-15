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
}

export interface CitiesResponse {
    value: Citiy[];
}

export interface Citiy {
    ciudad: string;
}

export interface SuccessReponse {
    Result: number;
}

export interface PremiereSelected {
    num_semana: string;
    id_pelicula: string;
}

export interface GetPremieresForecast {
    Value: PremiereForecast[];
}

export interface PremiereForecast {
    Cod_pelicula: string;
    Titulo: string;
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
