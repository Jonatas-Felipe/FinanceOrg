import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface IActivity {
  className?: string;
}

export const Container = styled.SafeAreaView`
  padding: 23px;
`;

export const Welcome = styled.View`
  flex-direction: row;
  padding: 60px 0;
  justify-content: space-between;
`;

export const H1 = styled.Text`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #505050;
  font-family: "Poppins_500Medium";
`;

export const ProfileButton = styled.TouchableOpacity``;

export const Avatar = styled.ImageBackground`
  border: 1px solid #8b8b8b;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;

export const H3 = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #363434;
  font-family: "Poppins_500Medium";
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

export const Card = styled(LinearGradient)`
  border-radius: 30px;
  width: 145px;
  height: 164px;
  padding: 26px 17px;
  /* background: linear-gradient(177.23deg, #2CF3E7 -13.49%, #3A49F9 109.75%); */
  background: #3a49f9;
  margin-right: 13px;
  position: relative;
  overflow: hidden;
`;

export const CardDetail = styled.View`
  width: 200px;
  height: 200px;
  background: #000000;
  opacity: 0.1;
  border-radius: 100px;
  position: absolute;
  top: 70%;
  left: -100%;
`;

export const CardTitle = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: auto;
`;

export const CardText = styled.Text`
  font-family: "Poppins_500Medium";
  font-weight: 500;
  font-size: 14px;
  color: #e0e0e0;
`;

export const CardExpenses = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const Activities = styled.View`
  margin-bottom: 55px;
`;

export const ActivitiesGroup = styled.View`
  flex-direction: row;
  margin-top: 13px;
`;

export const Activity = styled.TouchableHighlight<IActivity>`
  width: 100px;
  height: 100px;
  padding: 16px 16px 12px;
  background: #ffffff;
  border-radius: 26px;
  elevation: 5;

  ${(props) =>
    props.className === "mx-9px"
      ? css`
          margin-left: 9px;
          margin-right: 9px;
        `
      : css``}
`;

export const ActivityIcon = styled.View`
  width: 32px;
  height: 32px;
  background: #e9e9e9;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ActivityTitle = styled.Text`
  margin-top: auto;
  font-family: "Poppins_400Regular";
  font-size: 11px;
  color: #000000;
`;
