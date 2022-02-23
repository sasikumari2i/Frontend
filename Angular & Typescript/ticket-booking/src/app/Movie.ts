import { Theatre } from "./Theatre";

export interface Movie {
    img : string;
    movieTitle: string;
    genre: string;
    theatre : Theatre[];
}