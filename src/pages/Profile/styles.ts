import styled from "styled-components/native";
import ButtonComponent from "../../components/Button";

export const Container = styled.SafeAreaView`
  padding: 23px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 50px 0;
  align-items: center;
`;

export const H1 = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #505050;
  font-family: "Poppins_500Medium";
  margin-left: 10px;
`;

export const ProfileGroup = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #f5f5f5;
`;

export const Avatar = styled.ImageBackground`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  margin-right: 16px;
`;

export const H2 = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #717171;
  font-family: "Poppins_500Medium";
`;

export const InputGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const LabelGroup = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Label = styled.Text`
  font-family: "Poppins_500Medium";
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #717171;
  margin-right: 5px;
`;

export const EditButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(ButtonComponent)`
  height: 55px;
`;
