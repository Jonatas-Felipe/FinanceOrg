import { darken } from "polished";
import styled, { css } from "styled-components/native";

interface IContainer {
  isFocused: boolean;
  isErrored: boolean;
}

interface IButton {
  show?: boolean;
}

export const Container = styled.View<IContainer>`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: rgba(134, 134, 134, 0.2);
  padding: 0 10px;
  margin-bottom: 8px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${darken(0.3, "rgba(134, 134, 134, 0.2)")};
    `}
`;

export const Label = styled.Text`
  color: #b5b5b5;
  font-family: "Poppins_400Regular";
`;

export const Group = styled.View`
  padding: 10px 0 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  height: 20px;
  margin-right: 5px;
`;

export const Button = styled.TouchableOpacity<IButton>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  right: 0;
`;
