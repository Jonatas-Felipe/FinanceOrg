import styled from "styled-components/native";
import ButtonComponent from "../../components/Button";

interface IContent {
  minHeight: number;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.SafeAreaView<IContent>`
  padding: 0 30px;
  min-height: ${(props) => props.minHeight}px;
  justify-content: center;
`;

export const ReturnButton = styled(ButtonComponent)`
  width: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ReceptionText = styled.Text`
  color: #b5b5b5;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 5px;
  font-family: "Poppins_400Regular";
`;

export const H1 = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #414142;
  margin-bottom: 60px;
  font-family: "Poppins_600SemiBold";
`;

export const Group = styled.View`
  flex-direction: row;
`;

export const P = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #a5a5a5;
`;

export const SubmitButton = styled(ButtonComponent)`
  height: 55px;
`;
