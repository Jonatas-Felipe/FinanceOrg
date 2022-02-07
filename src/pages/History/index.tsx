import React, { useCallback, useMemo, useState } from 'react';
import {
  Ionicons,
  Entypo,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ScrollView, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  H1,
  BtnAdd,
  BtnText,
  ExpenseGroup,
  ExpenseText,
  ExpenseSubGroup,
  ExpenseCipher,
  ExpensePrice,
  BankGroup,
  BankOptionsGroup,
  BankNameGroup,
  SelectBank,
  BankName,
  Box,
  BalancesGroup,
  BalanceLabel,
  BalancePrice,
  Filter,
  FilterBox,
  Pagination,
  PageButton,
  Page,
} from './styles';
import Balance from '../../components/Balance';
import BalanceItem from '../../components/BalanceItem';

interface IOption {
  id: string | number | boolean;
  value: string;
  selected: boolean;
}

const History: React.FC = () => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [optionSelected, setOptionSelected] = useState<
    string | number | boolean
  >('all');

  const options = useMemo<IOption[]>(
    () => [
      {
        id: 'all',
        value: 'Filtrar por todos',
        selected: optionSelected === 'all',
      },
      {
        id: 'spendings',
        value: 'Filtrar apenas por gastos',
        selected: optionSelected === 'spendings',
      },
      {
        id: 'earnings',
        value: 'Filtrar apenas por ganhos',
        selected: optionSelected === 'earnings',
      },
    ],
    [optionSelected],
  );

  const handlePressGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handlePressFilter = useCallback(() => {
    setShowFilter(state => !state);
  }, []);

  const handleSelectOption = useCallback((option: IOption) => {
    setOptionSelected(option.id);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Container>
        <Header>
          <Title>
            <TouchableOpacity onPress={handlePressGoBack}>
              <Ionicons name="chevron-back" size={24} color="#000000" />
            </TouchableOpacity>
            <H1>Janeiro 2022</H1>
          </Title>
          <BtnAdd>
            <Entypo name="plus" size={20} color="#666666" />
            <BtnText>Adicionar</BtnText>
          </BtnAdd>
        </Header>
        <Balance />
        <ExpenseGroup>
          <ExpenseText>Total de gastos mensais</ExpenseText>
          <ExpenseSubGroup>
            <ExpenseCipher>R$</ExpenseCipher>
            <ExpensePrice>400,00</ExpensePrice>
          </ExpenseSubGroup>
        </ExpenseGroup>
        <BankGroup>
          <BankOptionsGroup>
            <BankNameGroup>
              <FontAwesome name="bank" size={17} color="#000" />
              <SelectBank>
                <BankName>Banco Next</BankName>
                <MaterialIcons name="arrow-drop-down" size={24} color="#000" />
              </SelectBank>
            </BankNameGroup>
            <FontAwesome5 name="calendar-day" size={24} color="#717171" />
          </BankOptionsGroup>
          <Box>
            <BalancesGroup paddingTop>
              <BalanceLabel>Saldo anterior:</BalanceLabel>
              <BalancePrice>R$ 1000,00</BalancePrice>
            </BalancesGroup>
            <BalancesGroup paddingBottom>
              <BalanceLabel>Saldo conta:</BalanceLabel>
              <BalancePrice>R$ 500,00</BalancePrice>
            </BalancesGroup>
          </Box>
          <Box>
            <Filter>
              <TouchableOpacity onPress={handlePressFilter}>
                <Ionicons name="filter" size={24} color="#000" />
              </TouchableOpacity>
              <FilterBox
                options={options}
                onSelect={handleSelectOption}
                show={showFilter}
                pointerEvents={showFilter ? 'auto' : 'none'}
              />
            </Filter>
            <BalanceItem
              type="inflows"
              title="Salário Attom"
              amount="5000,00"
              date="03/Jan"
            />
            <BalanceItem
              type="outflows"
              title="Conta de luz"
              amount="-100,00"
              date="03/Jan"
            />
            <BalanceItem
              type="investments"
              title="Compra de BNB"
              amount="-60,00"
              date="03/Jan"
            />
            <Pagination>
              <PageButton stringContent>
                <Page>Primeira</Page>
              </PageButton>
              <PageButton active>
                <Page active>01</Page>
              </PageButton>
              <PageButton>
                <Page>02</Page>
              </PageButton>
              <PageButton>
                <Page>03</Page>
              </PageButton>
              <PageButton disabled>
                <Page>...</Page>
              </PageButton>
              <PageButton>
                <Page>08</Page>
              </PageButton>
              <PageButton stringContent>
                <Page>Última</Page>
              </PageButton>
            </Pagination>
          </Box>
        </BankGroup>
      </Container>
    </ScrollView>
  );
};

export default History;
