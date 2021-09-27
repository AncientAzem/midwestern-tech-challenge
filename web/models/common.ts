export interface Button {
    text: string;
    url: string;
}

export interface SvgIcon {
    path: string;
    height: number;
    width: number;
}

export interface Header {
    title: string;
    link: Button;
}

export interface FormInput {
    id: string;
    type: string;
    label: string;
    placeholder?: string;
}
