import React, { useCallback } from "react";
import {
  Ionicons,
  Entypo,
  AntDesign,
  Fontisto,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ScrollView, TouchableOpacity } from "react-native";
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
  Pagination,
  PageButton,
  Page,
} from "./styles";
import Balance from "../../components/Balance";
import BalanceItem from "../../components/BalanceItem";

const History: React.FC = () => {
  const navigation = useNavigation();

  const handlePressGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Container>
        <Header>
          <Title>
            <TouchableOpacity onPress={handlePressGoBack}>
              <Ionicons name="chevron-back" size={24} color="#000000" />
            </TouchableOpacity>
            <H1>Janeiro 2022</H1>
          </Title>
          <BtnAdd>
            <Entypo name="plus" size={24} color="#666666" />
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
              <TouchableOpacity>
                <Ionicons name="filter" size={24} color="#000" />
              </TouchableOpacity>
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
