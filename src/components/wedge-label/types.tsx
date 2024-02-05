import ColorsPalette from "../../utils/ColorsPalette";

export interface WedgeLabelProps {
    label: string;
    fill: ColorsPalette;
    active: boolean;
    default: boolean;
    [key: string]: any; // Allow additional parameters
}
