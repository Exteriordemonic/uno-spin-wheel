import ColorsPalette from "../../utils/ColorsPalette";

export interface WedgeLabelProps {
    label: string;
    fill: ColorsPalette;
    [key: string]: any; // Allow additional parameters
}
