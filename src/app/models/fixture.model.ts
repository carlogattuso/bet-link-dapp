export interface Fixture {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
        first: number;
        second: number;
    };
    venue: {
        id: number;
        name: string;
        city: string;
    };
    status: {
        long: string;
        short: string;
        elapsed: number;
    };
}

export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: boolean | null;
}

export interface Score {
    halftime: {
        home: number;
        away: number;
    };
    fulltime: {
        home: number;
        away: number;
    };
    extratime: {
        home: null;
        away: null;
    };
    penalty: {
        home: null;
        away: null;
    };
}

export interface Match {
    fixture: Fixture;
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    teams: {
        home: Team;
        away: Team;
    };
    goals: {
        home: number;
        away: number;
    };
    score: Score;
}

export interface ApiResponse {
    get: string;
    parameters: {
        league: string;
        season: string;
        from: string;
        to: string;
    };
    errors: any[]; // Puedes ajustar esto según la estructura real de errores
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: Match[];
}