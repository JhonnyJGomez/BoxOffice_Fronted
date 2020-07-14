import { Injectable } from '@angular/core';

@Injectable()
export class MockData {
    GET_SCORE_MOCK = {
        Results: {
            output1: [
                {
                    Rank: '908',
                    Title: 'Maleficent: Mistress Of Evil',
                    Rating: 'A',
                    Dist: 'DISNEY',
                    Genre: 'Adventure',
                    ReleaseDate: '06/18/2020 12:00:00 AM',
                    'Scored Labels': '69547'
                },
                {
                    Rank: '1296',
                    Title: 'TERREMOTO EN CHILE',
                    Rating: 'M 14',
                    Dist: 'DELT',
                    Genre: 'Drama',
                    ReleaseDate: '06/18/2020 12:00:00 AM',
                    'Scored Labels': '16920'
                }
            ]
        }
    };
    GET_WEEKS = {
        num_semana: '25'
    };
    GET_PREMIERS = {
        value: [
            {
                Cod_pelicula: 'HO00001',
                title: 'MALEFICENT: MISTRESS OF EVIL',
                Rating: 'A',
                Dist: 'DISNEY',
                Genre: 'Adventure'
            },
            {
                Cod_pelicula: 'HO00002',
                title: 'TERREMOTO EN CHILE',
                Rating: 'M14',
                Dist: 'DELT',
                Genre: 'Drama'
            }
        ]
    };
    GET_CITIES = {
        value: [
            {
                ciudad: 'Lima'
            },
            {
                ciudad: 'Arequipa'
            },
            {
                ciudad: 'Trujillo'
            },
            {
                ciudad: 'Huanuco'
            },
            {
                ciudad: 'Cajarmarca'
            },
            {
                ciudad: 'Huancayo'
            }
        ]
    };
    POST_PREMIERE_FORECAST = {
        Result: 200
    };
    GET_PREMIERE_FORECAST = {
        Value: [
            {
                Cod_pelicula: 'HO00908',
                Titulo: 'MALEFICENT: MISTRESS OF EVIL'
            },
            {
                Cod_pelicula: 'HO01296',
                Titulo: 'TERREMOTO EN CHILE'
            }
        ]
    };
    GET_PARAMS = {
        Value: [
            {
                Id: '1',
                Atributo: 'Temporada_Vacaciones',
                Type: 'check'
            },
           /* {
                Id: '2',
                Atributo: 'Inicio_sabado_d10',
                Type: 'check'
            },
            {
                Id: '3',
                Atributo: 'Inicio_domingo_a6',
                Type: 'check'
            },
            {
                Id: '4',
                Atributo: 'grados_centigrados',
                Type: 'text'
            },
            {
                Id: '5',
                Atributo: 'Precipitacion',
                Type: 'text'
            },*/
            {
                Id: '6',
                Atributo: 'evento_tv',
                Type: 'days'
            },
            {
                Id: '7',
                Atributo: 'festivo',
                Type: 'days'
            },
            {
                Id: '8',
                Atributo: 'rank',
                Type: 'text'
            },
        ]
    };
    POST_PREMIERE_PARAMETERIZED = {
        Result: 200
    };
    POST_GENERATE_FORECAST = {
        Results: {
            output1: [
                {
                    Rank: '908',
                    Title: 'MALEFICENT: MISTRESS OF EVIL',
                    Rating: 'A',
                    Dist: 'DISNEY',
                    Genre: 'Adventure',
                    ReleaseDate: '06/18/2020 12:00:00 AM',
                    'Scored Labels': 69547
                },
                {
                    Rank: '1296',
                    Title: 'TERREMOTO EN CHILE',
                    Rating: 'A',
                    Dist: 'DELT',
                    Genre: 'Drama',
                    ReleaseDate: '06/18/2020 12:00:00 AM',
                    'Scored Labels': 16920
                }
            ]
        }
    };
    GET_VIEW_SCHEDULE = {
        id_forecast: '1',
        id_semana: '49',
        id_cine: '1',
        nom_cine: 'Jockey Plaza',
        days: [
            {
                id: 1,
                day: 'Jueves'
            },
            {
                id: 2,
                day: 'Viernes'
            },
            {
                id: 3,
                day: 'Sabado'
            },
            {
                id: 4,
                day: 'Domingo'
            },
            {
                id: 5,
                day: 'Lunes'
            },
            {
                id: 6,
                day: 'Martes'
            },
            {
                id: 7,
                day: 'Miercoles'
            }
        ],
        times: [
            {
                id: 1,
                time: 'Tarde',
                start: '12:00',
                end: '03:29'
            },
            {
                id: 2,
                time: 'Tarde Final',
                start: '03:30',
                end: '05:59'
            },
            {
                id: 3,
                time: 'Noche',
                start: '06:00',
                end: '09:59'
            },
            {
                id: 4,
                time: 'Noche Final',
                start: '10:00',
                end: '11:59'
            }
        ],
        movies: [
            {
                id_movie: '1',
                title: 'CAPITAN AMERICA: GUERRA CIVIL (2D) (DOB)',
                genre: 'action',
                cens: 'APT',
                shows: [
                    {
                        day: 1,
                        screen: 1,
                        screen_cap: '279',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 1,
                        screen_cap: '279',
                        time: 2,
                        start: '2:40PM',
                        final: '4:50PM'
                    }
                ]
            },
            {
                id_movie: '3',
                title: 'STAR TREK SIN LIMITES. (3D) (DOB)',
                genre: 'action',
                cens: 'APT',
                shows: [
                    {
                        day: 1,
                        screen: 2,
                        screen_cap: '170',
                        time: 2,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 2,
                        screen_cap: '170',
                        time: 3,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 2,
                        screen_cap: '170',
                        time: 4,
                        start: '2:40PM',
                        final: '4:50PM'
                    }
                ]
            },
            {
                id_movie: '7',
                title: 'NO RESPIRES (2D) (DOB)',
                genre: 'action',
                cens: 'APT',
                shows: [
                    {
                        day: 1,
                        screen: 1,
                        screen_cap: '279',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 3,
                        screen_cap: '170',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 3,
                        screen_cap: '170',
                        time: 2,
                        start: '',
                        final: ''
                    },
                    {
                        day: 1,
                        screen: 3,
                        screen_cap: '170',
                        time: 3,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 3,
                        screen_cap: '170',
                        time: 4,
                        start: '2:40PM',
                        final: '4:50PM'
                    }
                ]
            },
            {
                id_movie: '9',
                title: 'HASTA QUE LA SUEGRA NOS SEPARE (2D) (DOB)',
                genre: 'action',
                cens: 'APT',
                shows: [
                    {
                        day: 1,
                        screen: 4,
                        screen_cap: '321',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 5,
                        screen_cap: '169',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 6,
                        screen_cap: '280',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    },
                    {
                        day: 1,
                        screen: 7,
                        screen_cap: '520',
                        time: 1,
                        start: '2:40PM',
                        final: '4:50PM'
                    }
                ]
            },
            {
                id_movie: '11',
                title: 'DE MENTES MAESTRAS (2D) (SUB)',
                shows: [
                    {
                        day: 1,
                        screen: 4,
                        screen_cap: '321',
                        time: 2,
                        start: '',
                        final: ''
                    },
                    {
                        day: 1,
                        screen: 4,
                        screen_cap: '321',
                        time: 3,
                        start: '',
                        final: ''
                    },
                    {
                        day: 1,
                        screen: 4,
                        screen_cap: '321',
                        time: 4,
                        start: '',
                        final: ''
                    },
                    {
                        day: 1,
                        screen: 5,
                        screen_cap: '169',
                        time: 2,
                        start: '',
                        final: ''
                    }
                ]
            }
        ],
        screens: [
            {
                id: 1,
                screen: 'Sala 1',
                cap: '70'
            },
            {
                id: 2,
                screen: 'Sala 2',
                cap: '70'
            },
            {
                id: 3,
                screen: 'Sala 3',
                cap: '70'
            },
            {
                id: 4,
                screen: 'Sala 4',
                cap: '70'
            },
            {
                id: 5,
                screen: 'Sala 5',
                cap: '70'
            },
            {
                id: 6,
                screen: 'Sala 6',
                cap: '70'
            },
            {
                id: 7,
                screen: 'Sala 7',
                cap: '70'
            },
        ],
    };

    constructor() { }

    public getScore() {
        return {
            ...this.GET_SCORE_MOCK,
        };
    }

    public getWeek() {
        return {
            ...this.GET_WEEKS,
        };
    }

    public getPremiers() {
        return {
            ...this.GET_PREMIERS,
        };
    }

    public getCities() {
        return {
            ...this.GET_CITIES,
        };
    }

    public postPremiereForecast() {
        return {
            ...this.POST_PREMIERE_FORECAST,
        };
    }

    public getPremiereForecast() {
        return {
            ...this.GET_PREMIERE_FORECAST,
        };
    }

    public getParams() {
        return {
            ...this.GET_PARAMS,
        };
    }

    public postPremiereParameterized() {
        return {
            ...this.POST_PREMIERE_PARAMETERIZED,
        };
    }

    public postGenerateForecast() {
        return {
            ...this.POST_GENERATE_FORECAST
        };
    }

    public getSchedule() {
        return {
            ... this.GET_VIEW_SCHEDULE
        };
    }
}
