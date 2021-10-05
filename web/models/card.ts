import {Button, SvgIcon} from "./common";

export interface Card {
    icon: SvgIcon | null;
    heading: string;
    body: string;
    button: Button | null;
}
