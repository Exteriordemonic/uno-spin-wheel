import { WedgeLabelProps } from '../wedge-label/types'

export type LabelPropsType = {
    item: WedgeLabelProps,
    handleLabelClick: (id: string) => void
    handleRemoveClick: (id: string) => void
    handleLabelChange: (id: string, value: string) => void
    handleColorChange: (id: string, value: string) => void
}