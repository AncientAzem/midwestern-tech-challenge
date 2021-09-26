export interface CardData {
    icon?: SvgIcon;
    heading: string;
    body: string;
    button?: Button;
}

export interface Button {
    text: string;
    url: string;
}

export interface SvgIcon {
    path: string;
    height: number;
    width: number;
}
