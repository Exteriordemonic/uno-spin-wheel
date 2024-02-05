import { WedgeLabelProps } from '../wedge-label/types'

export type LabelListPropsType = {
    items: WedgeLabelProps[],
    handleLabelClick: (id: string) => void,
    handleRemoveClick: (id: string) => void,
    handleLabelChange: (id: string, value: string) => void,
    handleAddLabel: (item: WedgeLabelProps) => void,
    handleColorChange: (id: string, value: string) => void
}