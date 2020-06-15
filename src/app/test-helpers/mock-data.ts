import { Injectable } from '@angular/core';

@Injectable()
export class MockData {
    GET_SCORE_MOCK = {
        Results: {
            output1: [
                {
                    Rank: '1',
                    Title: 'Maleficent: Mistress Of Evil',
                    Rating: 'A',
                    Dist: 'DISNEY',
                    Genre: 'Adventure',
                    ReleaseDate: '10/17/2019 12:00:00 AM',
                    'Scored Labels': '2793020.5'
                },
                {
                    Rank: '1796',
                    Title: '0334 TERREMOTO EN CHILE',
                    Rating: 'M 14',
                    Dist: 'DELT',
                    Genre: 'Drama',
                    ReleaseDate: '3/21/2013 12:00:00 AM',
                    'Scored Labels': '2038.8525390625'
                },
                {
                    Rank: '801',
                    Title: '10 CLOVERFIELD LANE',
                    Rating: 'M 14',
                    Dist: 'PPI',
                    Genre: 'Suspense',
                    ReleaseDate: '4/14/2016 12:00:00 AM',
                    'Scored Labels': '65834.6796875'
                },
                {
                    Rank: '1198',
                    Title: '12 STRONG',
                    Rating: 'M 14',
                    Dist: 'DIAMOND',
                    Genre: 'Drama',
                    ReleaseDate: '5/10/2018 12:00:00 AM',
                    'Scored Labels': '22339.140625'
                },
                {
                    Rank: '674',
                    Title: '12 YEARS A SLAVE',
                    Rating: 'M 14',
                    Dist: 'DISNEY',
                    Genre: 'Drama',
                    ReleaseDate: '2/13/2014 12:00:00 AM',
                    'Scored Labels': '93814.796875'
                },
                {
                    Rank: '1498',
                    Title: '13 HOURSTHE SECRET SOLDIERS OF BENGHAZI',
                    Rating: 'M 14',
                    Dist: 'PPI',
                    Genre: 'Action',
                    ReleaseDate: '2/25/2016 12:00:00 AM',
                    'Scored Labels': '8545.4541015625'
                }
            ]
        }
    };
    GET_WEEKS = {
        num_semana: '49'
    };
    GET_PREMIERS = {
        value: [
            {
                Cod_pelicula: 'HO00001',
                title: 'AVENGER END GAME',
                Rating: 'A',
                Dist: 'DISNEY',
                Genre: 'Adventure'
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
            }
        ]
    };
    POST_PREMIERE_FORECAST = {
        Result: 200
    };
    GET_PREMIERE_FORECAST = {
        Value: [
            {
                Cod_pelicula: 'HO00001',
                Titulo: 'AVENGER END GAME'
            },
            {
                Cod_pelicula: 'HO00002',
                Titulo: 'STARWARS'
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
            {
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
            },
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
                    Rank: '1',
                    Title: 'Maleficent: Mistress Of Evil',
                    Rating: 'A',
                    Dist: 'DISNEY',
                    Genre: 'Adventure',
                    ReleaseDate: '10/17/2019 12:00:00 AM',
                    'Scored Labels': 2793020.5
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
