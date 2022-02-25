export interface Movie {
    img : string;
    movieTitle: string;
    genre: string;
    banner: string;
    votes: string;
    time: string;
    cert: string;
    date:string;
    theatre : Theatre[];
}

export interface Theatre {
    name: string;
    timings:string[];
}

export interface Premier {
    img : string;
    title: string;
    language: string;
}