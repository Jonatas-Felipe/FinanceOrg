import styled, { css } from "styled-components/native";

interface IBalanceType {
  type: "inflows" | "outflows" | "investments";
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const BalanceIcon = styled.View<IBalanceType>`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.type === "inflows") {
      return css`
        background-color: #caeccc;
      `;
    }

    if (props.type === "outflows") {
      return css`
        background-color: #ffb1b1;
      `;
    }

    return css`
      background-color: #fff2b3;
    `;
  }}
`;

export const BalanceGroup = styled.View`
  width: 50%;
`;

export const BalanceTitle = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #535354;
`;

export const BalanceAmount = styled.Text<IBalanceType>`
  font-family: "Poppins_600SemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  ${(props) => {
    if (props.type === "inflows") {
      return css`
        color: #00de8e;
      `;
    }

    if (props.type === "outflows") {
      return css`
        color: #f4000f;
      `;
    }

    return css`
      color: #f4cb00;
    `;
  }}
`;

export const BalanceDate = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a8a8a8;
`;
