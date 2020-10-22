export interface ParamsResponse {
    Value: Param[];
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
