import styled from 'styled-components/native';
import FilterBoxComponent from '../../components/FilterBox';

interface IBalancesGroup {
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

interface IFilterBox {
  show?: boolean;
}

interface IPageButton {
  active?: boolean;
  stringContent?: boolean;
}

interface IPage {
  active?: boolean;
}

export const Container = styled.SafeAreaView`
  padding: 23px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 50px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const H1 = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #505050;
  font-family: 'Poppins_600SemiBold';
  margin-left: 10px;
`;

export const BtnAdd = styled.TouchableOpacity`
  background: #F2F2F2;
  height: 35px
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-radius: 100px;
`;

export const BtnText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  color: #666666;
  margin-left: 6px;
`;

export const ExpenseGroup = styled.View`
  background: #f9f9f9;
  border-radius: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
`;

export const ExpenseText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 10px;
  line-height: 12px;
  color: #a8a8a8;
`;

export const ExpenseSubGroup = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ExpenseCipher = styled.Text`
  font-family: 'Poppins_500Medium';
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #4d525a;
`;

export const ExpensePrice = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #4d525a;
`;

export const BankGroup = styled.View`
  margin-top: 70px;
`;

export const BankOptionsGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const BankNameGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SelectBank = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BankName = styled.Text`
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #969696;
  margin: 0 22px 0 5px;
`;

export const Box = styled.View`
  background: #f9f9f9;
  border-radius: 20px;
  margin-bottom: 13px;
`;

export const BalancesGroup = styled.View<IBalancesGroup>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${props => (props.paddingTop ? '20px' : '10px')};
  padding-bottom: ${props => (props.paddingBottom ? '20px' : '10px')};
`;

export const BalanceLabel = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 20px;
  color: #a8a8a8;
`;

export const BalancePrice = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #2a2c30;
`;

export const Filter = styled.View`
  padding: 20px;
  align-items: flex-end;
  position: relative;
`;

export const FilterBox = styled(FilterBoxComponent)<IFilterBox>`
  position: absolute;
  top: 50px;
  right: 25px;
  z-index: 100;
  opacity: ${props => (props.show ? 1 : 0)};
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 30px;
  margin: 0 20px;
  margin-top: 24px;
  border-top-width: 1px;
  border-style: solid;
  border-color: #d7d7d7;
`;

export const PageButton = styled.TouchableOpacity<IPageButton>`
  width: ${props => (props.stringContent ? '60px' : '30px')};
  height: 30px;
  border-radius: ${props => (props.stringContent ? '10px' : '15px')};
  background: ${props => (props.active ? '#2a2c30' : 'transparent')};
  align-items: center;
  justify-content: center;
`;

export const Page = styled.Text<IPage>`
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.active ? '#EFEFEF' : '#828282')};
`;
