import {Button, SvgIcon} from "./common";

export interface CardData {
    icon?: SvgIcon;
    heading: string;
    body: string;
    button?: Button;
}
