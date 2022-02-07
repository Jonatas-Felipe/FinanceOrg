import styled, { css } from 'styled-components/native';

interface IBalanceType {
  type: 'inflows' | 'outflows' | 'investments' | 'credit';
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 20px;
`;

export const BalanceIcon = styled.View<IBalanceType>`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.type === 'inflows') {
      return css`
        background-color: #caeccc;
      `;
    }

    if (props.type === 'outflows') {
      return css`
        background-color: #ffb1b1;
      `;
    }

    if (props.type === 'investments') {
      return css`
        background-color: #fff2b3;
      `;
    }

    return css`
      background-color: #e6e6e6;
    `;
  }}
`;

export const Balance = styled.View`
  width: 100%;
  max-width: 220px;
`;

export const BalanceContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BalanceGroup = styled.View``;

export const BalanceTitle = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 5px;
  color: #535354;
`;

export const BalanceAmount = styled.Text<IBalanceType>`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  ${props => {
    if (props.type === 'inflows') {
      return css`
        color: #00de8e;
      `;
    }

    if (props.type === 'outflows') {
      return css`
        color: #f4000f;
      `;
    }

    if (props.type === 'investments') {
      return css`
        color: #f4cb00;
      `;
    }

    return css`
      color: #949494;
    `;
  }}
`;

export const BalanceDate = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a8a8a8;
`;

export const InstallmentsGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-style: solid;
  border-color: #e2e2e2;
  padding-top: 10px;
  margin-top: 10px;
`;

export const InstallmentsText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  color: #b8b8b8;
`;

export const InstallmentsQuantity = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  color: #676565;
`;
