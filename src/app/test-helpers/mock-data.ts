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
            ...this.POST_GENERATE_FORECAST,
        };
    }
}
