export interface Input {
    id: string;
    type: string;
    label: string;
    placeholder?: string;
    required: boolean;
}

export interface FormDataItem {
    id: string;
    value: any;
    valid: boolean;
}
