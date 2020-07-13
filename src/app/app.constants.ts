import { environment } from '../environments/environment';
export const APP_CONSTANTS = {
    API: {
        BASE: environment.webApiBase,
        AZURE: environment.azure,
        GET_WEEKS: '/semanas?fecha_inicial={date}',
        GET_PREMIERS: '/peliculas_semanas?num_semana={week}',
        GET_CITIES: '/ciudades',
        POST_FORECAST_PREMIERE: '/peliculas_forecast/create',
        GET_FORECAST_PREMIERS: '/forecasts?id_ciudad={cityId}&num_semana={week}',
        GET_PARAMS: '/parametros',
        POST_PREMIERE_PARAMETERIZED: '/peliculas_parametrizar?num_semana={week}&id_pelicula={movieId}',
        POST_GENERATE_FORECAST: '/forecast/generate_forecast',
        GET_CINEMAS: '/cines?cod_ciudad={cityId}',
        GET_PARAMS_PROGRAM: '/param_program',
        POST_SAVE_PARAM_PROGRAM: '/registra_param_program',
        GENERATE_SCHEDULE: '/generar_programacion',
        GET_SCHEDULE: '/generar_programacion?forecast={forecast}'
    },
    HTTP_HEADERS: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer qNkxIum11cJiiB6LiYnu+SrIiN3G73ytQl89y4kVsXvR80xGyHW8GtPTVLCgbJXSg6wPas/o7ti/MooXDWNADg=='
    }
};
