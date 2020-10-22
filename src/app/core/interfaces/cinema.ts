export interface CinemaResponse {
    value: Cinema[];
}

export interface Cinema {
    cod_ciudad: number;
    id: string;
    nom_cine: string;
    ticket_promedio: number;
}
