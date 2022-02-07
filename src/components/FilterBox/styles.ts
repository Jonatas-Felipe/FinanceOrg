import styled, { css } from 'styled-components/native';

interface InputGroup {
  firstOption?: boolean;
  lastOption?: boolean;
}

interface IRadioCheck {
  selected?: boolean;
}

export const Container = styled.View`
  background: #ffffff;
  border-radius: 11px;
  padding: 31px 23px;
`;

export const RadioButton = styled.TouchableWithoutFeedback``;

export const InputGroup = styled.View<InputGroup>`
  flex-direction: row;
  align-items: center;
  ${props => {
    if (props.firstOption) {
      return css`
        margin-top: 0px;
        margin-bottom: 10px;
      `;
    }

    if (props.lastOption) {
      return css`
        margin-top: 10px;
        margin-bottom: 0px;
      `;
    }

    return css`
      margin-top: 10px;
      margin-bottom: 10px;
    `;
  }}
`;

export const RadioBox = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  border: 1px solid #000000;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const RadioCheck = styled.View<IRadioCheck>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: #000000;
  border-radius: 20px;
  opacity: ${props => (props.selected ? 1 : 0)};
`;

export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 17px;
  color: #a8afb9;
`;
