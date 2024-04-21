import { CardUI } from '@/shared/ui'
import { FC } from 'react'
import { Sale } from '../model/types/Sale'

export const SaleItem: FC<{ sale: Sale }> = ({ sale }) => {
    return <CardUI variant="ghost"></CardUI>
}
