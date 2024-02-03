import { WedgeLabelProps } from "../../components/wedge-label/types";

export type SettingModalPropsType = {
    open: boolean;
    setOpen: (open: boolean) => void;
    items: WedgeLabelProps[];
    setItems: (items: WedgeLabelProps[]) => void;
}