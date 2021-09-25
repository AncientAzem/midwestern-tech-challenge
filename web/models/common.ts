export interface Card {
    icon?: string;
    heading: string;
    body: string;
    button?: Button;
    url?: string;
}

export interface Button {
    text: string;
    url: string;
}
