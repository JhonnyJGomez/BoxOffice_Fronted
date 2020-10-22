export interface ParamaterAddedToPremiereResponse {
    value: ForecastItemBodyToSentAzureServer[];
}

export interface ForecastItemBodyToSentAzureServer {
    Rank: string;
    Title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    ReleaseDate?: string;
    value: number;
}

export interface ForecastUpdatedResponse {
    value: string;
}

export interface CreatedForecastReponse {
    Result: string;
}
