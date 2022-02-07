import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import FilterBoxComponent from '../../components/FilterBox';

interface ICard {
  first?: boolean;
  last?: boolean;
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
  padding-top: 23px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 50px 23px 20px;
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
  width: 40px
  height: 40px
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const MyCards = styled.View`
  margin-bottom: 45px;
`;

export const CardsGroup = styled.ScrollView`
  flex-direction: row;
  margin-top: 18px;
  padding-bottom: 10px;
  width: 100%;
  overflow: scroll;
`;

export const Card = styled(LinearGradient)<ICard>`
  border-radius: 30px;
  width: 280px;
  height: 185px;
  padding: 30px;
  background: #3a49f9;
  position: relative;
  overflow: hidden;

  ${props => {
    if (props.first) {
      return css`
        margin-left: 23px;
        margin-right: 6px;
      `;
    }

    if (props.last) {
      return css`
        margin-left: 6px;
        margin-right: 23px;
      `;
    }

    return css`
      margin-left: 6px;
      margin-right: 6px;
    `;
  }}
`;

export const CardDetail = styled.View`
  width: 285px;
  height: 285px;
  background: #000000;
  opacity: 0.1;
  border-radius: 285px;
  position: absolute;
  top: 70%;
  left: -60%;
`;

export const CardGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: auto;
`;

export const CardTitle = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const CardBtnEdit = styled.TouchableOpacity``;

export const CardText = styled.Text`
  font-family: 'Poppins_500Medium';
  font-weight: 500;
  font-size: 14px;
  color: #e0e0e0;
`;

export const CardExpenses = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const LimitGroup = styled.View`
  padding: 0 23px;
`;

export const H2 = styled.Text`
  font-family: 'Poppins_600SemiBold';
  margin-bottom: 16px;
  font-weight: 600;
  color: #000000;
`;

export const AmountGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AmountSpent = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;

export const AmountLimit = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-weight: 600;
  font-size: 18px;
  color: #bfbfbf;
`;

export const LimitBar = styled.View`
  margin-top: 8px;
  height: 10px;
  background: #f3f3f3;
  border-radius: 40px;
  position: relative;
`;

export const SpendingLimit = styled.View`
  width: 30%;
  height: 10px;
  background: #4b4b4b;
  border-radius: 40px;
  position: absolute;
  left: 0;
`;

export const ExpenseGroup = styled.View`
  margin-top: 70px;
  background: #f8f8f8;
  padding: 0 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #e5e5e5;
  border-radius: 35px;
  height: 37px;
  width: 140px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 100px;
  margin: 40px 0 25px 15px;
`;

export const AddButtonText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  color: #666666;
  margin-left: 6px;
`;

export const FilterBox = styled(FilterBoxComponent)<IFilterBox>`
  position: absolute;
  top: 50px;
  right: 25px;
  z-index: 100;
  opacity: ${props => (props.show ? 1 : 0)};
`;

export const ExpenseMonthGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  padding: 0 15px;
`;

export const ExpenseMonth = styled.Text`
  font-family: 'Poppins_700Bold';
  font-weight: bold;
  font-size: 18px;
  color: #454545;
  margin: 0 22px 0 5px;
`;

export const Pagination = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 30px;
  margin: 0 20px 0;
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
