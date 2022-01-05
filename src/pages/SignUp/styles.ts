import styled from 'styled-components';
import { SafeAreaView, View, Text as TextComponent } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const ReceptionText = styled(TextComponent)`
  color: #B5B5B5;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 5px;
`;

export const H1 = styled(TextComponent)`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #414142;
  margin-bottom: 60px;
`;

export const Group = styled(View)`
  flex-direction: row;
`;

export const Text = styled(TextComponent)`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #A5A5A5;
`;
