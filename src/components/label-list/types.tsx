import { WedgeLabelProps } from '../wedge-label/types'

export type LabelListPropsType = {
    items: WedgeLabelProps[],
    handleLabelClick: (id: string) => void
}