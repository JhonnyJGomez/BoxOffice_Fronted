export interface ParamsProgramResponse {
    value: ParamProgramItem[];
}

export interface ParamProgramItem {
    cod_parametro: string;
    id: number;
    type: string;
    value: string | boolean | boolean[];
}

export interface CreatedProgramReponse {
    Result: string;
}

export interface ParamProgramToSave {
    value: {
        cod_forecast: string;
        id_parametro: number;
        value: boolean | string;
    }[];
}
