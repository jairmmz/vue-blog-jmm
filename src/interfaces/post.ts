export interface IPost {
    id?: string | number
    category: string
    title: string
    slug: string
    description?: string
    image?: string
    date: string
    time_read: string
}

export interface IPostList {
    post: IPost[]
}