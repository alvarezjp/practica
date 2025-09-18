export interface Article {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export interface StrapiType<T>{
    data:T[];
}