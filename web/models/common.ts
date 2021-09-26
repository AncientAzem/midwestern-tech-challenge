export interface CardData {
    icon?: string;
    heading: string;
    body: string;
    button?: Button;
}

export interface Button {
    text: string;
    url: string;
}
