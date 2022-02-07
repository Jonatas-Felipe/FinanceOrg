import React, { useMemo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  BalanceContent,
  BalanceIcon,
  Balance,
  BalanceGroup,
  BalanceTitle,
  BalanceAmount,
  BalanceDate,
  InstallmentsGroup,
  InstallmentsText,
  InstallmentsQuantity,
} from './styles';

interface IBalanceItem {
  type: 'inflows' | 'outflows' | 'investments' | 'credit';
  title: string;
  amount: string;
  date: string;
  installments?: string;
}

const BalanceItem: React.FC<IBalanceItem> = ({
  type,
  title,
  amount,
  date,
  installments,
}) => {
  const color = useMemo(() => {
    switch (type) {
      case 'inflows':
        return '#147C18';
      case 'outflows':
        return '#F4000F';
      case 'investments':
        return '#F4CB00';
      default:
        return '#949494';
    }
  }, [type]);

  return (
    <Container>
      <BalanceIcon type={type}>
        {type === 'inflows' ? (
          <MaterialCommunityIcons
            name="arrow-collapse-down"
            size={20}
            color={color}
          />
        ) : (
          <MaterialCommunityIcons
            name="arrow-expand-up"
            size={20}
            color={color}
          />
        )}
      </BalanceIcon>
      <Balance>
        <BalanceContent>
          <BalanceGroup>
            <BalanceTitle>{title}</BalanceTitle>
            <BalanceAmount type={type}>{amount}</BalanceAmount>
          </BalanceGroup>
          <BalanceDate>{date}</BalanceDate>
        </BalanceContent>
        {type === 'credit' && (
          <InstallmentsGroup>
            <InstallmentsText>Parcelas:</InstallmentsText>
            <InstallmentsQuantity>{installments}</InstallmentsQuantity>
          </InstallmentsGroup>
        )}
      </Balance>
    </Container>
  );
};

export default BalanceItem;
