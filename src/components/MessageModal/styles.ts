import styled, { css, DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
  ${() => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: red;
  `}
`
