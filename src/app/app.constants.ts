import { environment } from '../environments/environment';
export const APP_CONSTANTS = {
    API: {
        BASE: environment.webApiBase,
        AZURE: environment.azure,
        // tslint:disable-next-line: max-line-length
        AZURE_POST_GENERATE_FORECAST: 'forecast/workspaces/67e04638658949d8a650452a02b98bdb/services/06c5630cea5f4c8582fc75ef66b228ab/execute?api-version=2.0&format=swagger',
        GET_WEEKS: '/semanas?fecha_inicial="{date}"',
        GET_PREMIERS: '/peliculas_semanas?id_semana={week}',
        GET_CITIES: '/ciudades',
        POST_FORECAST_PREMIERE: '/peliculas_forecast/create',
        GET_FORECAST_PREMIERS: '/peliculas_forecast/forecast?id_ciudad={cityId}&num_semana={week}',
        GET_PARAMS: '/parametros',
        POST_PREMIERE_PARAMETERIZED: '/peliculas_parametrizar?num_semana={week}&id_pelicula={movieId}',
        POST_GENERATE_FORECAST: '/forecast/generate_forecast',
        GET_CINEMAS: '/cines?cod_ciudad={cityId}',
        GET_PARAMS_PROGRAM: '/parametros/param_program',
        POST_SAVE_PARAM_PROGRAM: '/parametros/save_param_program',
        GENERATE_SCHEDULE: '/generar_programacion',
        GET_SCHEDULE: '/generar_programacion?forecast={forecast}',
        GET_FORECAST_REPORT: '/peliculas_forecast/forecast_report/{codeForecast}',
        AZURE_POST_UPDATE_FORECAST_AFTER_AZURE: '/peliculas_forecast/update_forecast/{cod_forecast}'
    },
    HTTP_HEADERS: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer qNkxIum11cJiiB6LiYnu+SrIiN3G73ytQl89y4kVsXvR80xGyHW8GtPTVLCgbJXSg6wPas/o7ti/MooXDWNADg=='
    }
};
