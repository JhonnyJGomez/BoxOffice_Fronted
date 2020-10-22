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

export interface GeneratedSchedule {
    cod_forecast: number;
    status: string;
}
