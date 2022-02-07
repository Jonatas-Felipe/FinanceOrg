import React, { useCallback, useMemo, useState } from 'react';
import {
  Ionicons,
  Entypo,
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
  MyCards,
  CardsGroup,
  Card,
  CardDetail,
  CardGroup,
  CardTitle,
  CardBtnEdit,
  CardText,
  CardExpenses,
  LimitGroup,
  H2,
  AmountGroup,
  AmountSpent,
  AmountLimit,
  LimitBar,
  SpendingLimit,
  ExpenseGroup,
  AddButton,
  AddButtonText,
  ExpenseMonthGroup,
  ExpenseMonth,
  Pagination,
  PageButton,
  Page,
} from './styles';
import BalanceItem from '../../components/BalanceItem';

interface IOption {
  id: string | number | boolean;
  value: string;
  selected: boolean;
}

const Cards: React.FC = () => {
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
            <H1>Cartões</H1>
          </Title>
          <BtnAdd>
            <Entypo name="plus" size={22} color="#666666" />
          </BtnAdd>
        </Header>
        <MyCards>
          <CardsGroup horizontal>
            <Card first colors={['#6200ff', '#380059']}>
              <CardDetail />
              <CardGroup>
                <CardTitle>Nubank</CardTitle>
                <CardBtnEdit>
                  <MaterialIcons name="edit" size={19} color="#FFFFFF" />
                </CardBtnEdit>
              </CardGroup>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 166,01</CardExpenses>
            </Card>
            <Card colors={['#00FFD1', '#005959']}>
              <CardDetail />
              <CardGroup>
                <CardTitle>Next</CardTitle>
                <CardBtnEdit>
                  <MaterialIcons name="edit" size={19} color="#FFFFFF" />
                </CardBtnEdit>
              </CardGroup>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 66,01</CardExpenses>
            </Card>
            <Card last colors={['#f93a3a', '#b91414']}>
              <CardDetail />
              <CardGroup>
                <CardTitle>Bradesco</CardTitle>
                <CardBtnEdit>
                  <MaterialIcons name="edit" size={19} color="#FFFFFF" />
                </CardBtnEdit>
              </CardGroup>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 16,01</CardExpenses>
            </Card>
          </CardsGroup>
        </MyCards>
        <LimitGroup>
          <H2>Limite disponível</H2>
          <AmountGroup>
            <AmountSpent>R$ 166,01</AmountSpent>
            <AmountLimit>R$ 1.000,00</AmountLimit>
          </AmountGroup>
          <LimitBar>
            <SpendingLimit />
          </LimitBar>
        </LimitGroup>
        <ExpenseGroup>
          <AddButton onPress={handlePressFilter}>
            <Entypo name="plus" size={20} color="#666666" />
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
          <ExpenseMonthGroup>
            <ExpenseMonth>Janeiro 2022</ExpenseMonth>
            <FontAwesome5 name="calendar-day" size={24} color="#717171" />
          </ExpenseMonthGroup>
          <BalanceItem
            type="credit"
            title="Uber"
            amount="-28,92"
            date="03/Jan"
            installments="01 de 01"
          />
          <BalanceItem
            type="credit"
            title="Curso de inglês"
            amount="-194,56"
            date="03/Jan"
            installments="06 de 10"
          />
          <BalanceItem
            type="credit"
            title="Disney Plus"
            amount="-27,90"
            date="03/Jan"
            installments="Recor."
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
        </ExpenseGroup>
      </Container>
    </ScrollView>
  );
};

export default Cards;
