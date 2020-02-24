export interface Post {
    id?: number;
    text: string;
    author: string;
}
export interface Comment {
    id?: number;
    body: string;
    postId: number;
}

export interface Profile {
    name: string;
}
