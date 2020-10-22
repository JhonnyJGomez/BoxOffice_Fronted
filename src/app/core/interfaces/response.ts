export interface PremiereSelected {
    id_semana: string;
    id_pelicula: string;
    id_ciudad: number;
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
