import styled, { css } from 'styled-components';
import { TouchableOpacity, Text as TextComponent } from 'react-native';

interface IContainer {
  type?: 'primary' | 'secodary';
}

interface IText {
  type?: 'primary' | 'secodary';
}

export const Container = styled(TouchableOpacity)<IContainer>`
  ${props => props.type ? css`
    background-color: ${props.type === 'primary' ? '#353535' : '#F2F2F2'};
  ` : ''}
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(TextComponent)<IText>`
  text-align: center;
  ${props => props.type ? css`
    color: ${props.type === 'primary' ? '#fff' : '#666'};
  ` : ''}
`;
