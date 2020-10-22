import { ForecastItemBodyToSentAzureServer } from './forecast';

export interface AzureBody {
    Inputs: {
        input1: ForecastItemBodyToSentAzureServer[]
    };
}

export interface ScoredLabelGeneratedByAzureServer {
    Results: {
        output1: SecoreLabedGeneratedItem[];
    };
}

export interface SecoreLabedGeneratedItem {
    Rank: string;
    Title: string;
    Rating: string;
    Dist: string;
    Genre: string;
    ReleaseDate: string;
    'Scored Labels': string;
}
