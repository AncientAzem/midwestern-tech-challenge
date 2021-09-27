export interface Input {
    id: string;
    type: string;
    label: string;
    placeholder?: string;
    required: boolean;
    valid?: boolean;
}

interface UpdatedStatusFunc {
    input: Input;
    isValid: boolean;
}
