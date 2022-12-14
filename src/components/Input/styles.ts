import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native-element-textinput'

export type InputProps = {
  error?: string | false | undefined
}

export const Input = styled(TextInput).attrs(({ theme }) => ({
  inputStyle: {
    fontSize: 16,
    color: theme.colors.text_100,
  },
  iconStyle: {
    tintColor: theme.colors.text_100,
  },
  placeholderTextColor: theme.colors.border_color,
}))`
  ${({ theme }) => css`
    height: 70px;
    background-color: transparent;
    border-bottom-color: ${theme.colors.border_color};
    border-bottom-width: 1px;
    padding-right: 5px;
  `}
`

export const EditableTextBox = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    position: absolute;
    left: 32px;
    top: -60px;
  `}
`

export const EditableText = styled.Text`
  ${({ theme }) => css`
    font-size: 35px;
    margin-right: 16px;
    color: ${theme.colors.text_100};
  `}
`

export const TextInputTop = styled.TextInput`
  ${({ theme }) => css`
    width: 100%;
    font-size: 35px;
    color: ${theme.colors.text_100};
  `}
`

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: red;
    padding-left: 8px;
    position: absolute;
    bottom: 6px;
    left: 130px;
  `}
`
