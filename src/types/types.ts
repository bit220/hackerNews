export interface IStory {
    by: string;
    descendants: number;
    id: number;
    kids?: number[];
    text? : string;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export interface IComment {
    by: number;
    descendants: number;
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    kids?: number[];
}