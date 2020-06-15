import { environment } from '../environments/environment';
export const APP_CONSTANTS = {
    API: {
        GET_DATA: environment.webApiBase,
        GET_WEEKS: 'http://localhost:4200/semanas/fecha_inicial={date}',
        GET_PREMIERS: 'http://localhost:4200/peliculas_semanas/semana={week}',
        GET_CITIES: 'http://localhost:4200/ciudades',
        POST_FORECAST_PREMIERE: 'http://localhost:4200/peliculas_forecast/create?',
        GET_FORECAST_PREMIERS: 'http://localhost:4200/peliculas_forecast/num_semana',
        GET_PARAMS: 'http://localhost:4200/parametros',
        POST_PREMIERE_PARAMETERIZED: 'http://localhost:4200/peliculas_parametrizar/num_semana={week}',
        // tslint:disable-next-line: max-line-length
        POST_GENERATE_FORECAST: 'http://localhost:4200/forecast/generate_forecast'
    },
    HTTP_HEADERS: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer qNkxIum11cJiiB6LiYnu+SrIiN3G73ytQl89y4kVsXvR80xGyHW8GtPTVLCgbJXSg6wPas/o7ti/MooXDWNADg=='
    }
};
