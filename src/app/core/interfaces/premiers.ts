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
