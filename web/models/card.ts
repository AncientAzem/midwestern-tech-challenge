import {Button, SvgIcon} from "./common";

export interface Card {
    icon?: SvgIcon;
    heading: string;
    body: string;
    button?: Button;
}
