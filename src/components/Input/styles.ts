import styled from 'styled-components';
import { 
  View, 
  Text, 
  TextInput as TextInputComponent,
  TouchableOpacity,
} from 'react-native';

export const Container = styled(View)`
  border-bottom-width: 1px;
  border-style: solid;
  border-color: rgba(134, 134, 134, 0.2);
`;

export const Label = styled(Text)``;

export const Group = styled(View)`
  padding: 15px 5px;
  flex-direction: row;
`;

export const TextInput = styled(TextInputComponent)`
  padding-left: 5px;
  width: 90%;
`;

export  const Button = styled(TouchableOpacity)``;


