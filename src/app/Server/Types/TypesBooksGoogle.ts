export interface TypeBook {
    kind:       string;
    totalItems: number;
    items:      Item[];
}

export interface Item {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
    title:               string;
    subtitle:            string;
    authors:             string[];
    publisher:           string;
    publishedDate:       Date;
    description:         string;
    pageCount:           number;
    imageLinks:          ImageLinks;
    language:            string;
    previewLink:         string;
    infoLink:            string;
    canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

