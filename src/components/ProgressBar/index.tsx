import theme from '@src/styles/theme'
import { useMemo } from 'react'
import { formatCurrency } from 'react-native-format-currency'

import * as S from './styles'

export type ProgressBarProps = {
  maxValue: number
  amountSpent: number
}

export const ProgressBar = ({ amountSpent, maxValue }: ProgressBarProps) => {
  const porcentValue = useMemo(() => {
    return (amountSpent * 100) / maxValue
  }, [amountSpent, maxValue])

  const barColor = (porcent: number) => {
    if (porcent <= 33.5) return theme.colors.green_300
    if (porcent > 33.5 && porcent <= 66.5) return theme.colors.yellow_300
    if (porcent > 66.5) return theme.colors.orange_300
    return ''
  }

  return (
    <S.Container>
      <S.Content>
        <S.Bar
          barPorcent={amountSpent >= maxValue ? 100 : porcentValue}
          color={barColor(porcentValue)}
        />
      </S.Content>
    </S.Container>
  )
}
