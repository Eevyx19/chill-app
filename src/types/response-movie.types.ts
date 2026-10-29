export interface ResponseMovie {
    id: string,
    img: string,
    backdrop: string,
    title: string,
    rating: number,
    isNew: boolean,
    isTop: boolean,
    genre: string[]
}

export interface MoviePreviewState {
    movie: ResponseMovie;
    rect: DOMRect
}