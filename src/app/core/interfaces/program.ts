export interface Schedule {
    id_cine?: string;
    id_forecast?: string;
    id_semana?: string;
    nom_cine?: string;
    movies?: ProgramPermiereDataParsed[];
    times?: Time[];
    screens?: Screens[];
    days?: ProgramGroupByDays[];
    cinemaDays?: CinemaDay[];
}

export interface ProgramData {
    status: ProgramDataPremiere[];
}

export interface ProgramGroupByDays {
    id_day: string;
    name_day: string;
    data?: ProgramDataPremiere[];
    movies: ProgramPermiereDataParsed[];
    moviesParsedToRender?: any[];
}

export interface Screens {
    id: number;
    screen: string;
    cap: string;
}

export interface Time {
    id: number;
    time: string;
    start: string;
    end: string;
}

export interface ProgramPermiereDataParsed {
    title: string;
    id_movie: number;
    genre: string;
    cens: string;
    shows: ProgramDataPremiere[];
    data?: any[];
}

export interface ProgramDataPremiere {
    id: number;
    titulo: string;
    nom_genero: string;
    nom_rating: string;
    id_dia: number;
    nom_sala: string;
    capacidad: number;
    id_tiempo: number;
}

export interface CinemaDay {
    id: number;
    day: string;
}
