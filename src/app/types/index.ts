export type User = {
    id: number;
    name: string;
};

export type Task = {
    id: number;
    userId: number;
    title: string;
    date: string;
    description: string;
};
