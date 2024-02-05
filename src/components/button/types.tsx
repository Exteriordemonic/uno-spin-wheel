export enum ButtonType { 
    icon = 'icon',
    text = 'text',
}

export type ButtonPropsType = {
    children: React.ReactNode,
    type: ButtonType,
    onClick: (event: React.MouseEvent<HTMLElement> | null) => void,
};

export type ButtonClassListType = {
    [key: string]: string;
  } & Record<ButtonType, string>;
