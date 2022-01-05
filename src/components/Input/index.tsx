import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Container, Label, Group, TextInput, Button } from './styles';

interface IInputProps extends TextInputProps{
  label?: string;
}

const Input: React.FC<IInputProps> = ({label, style, secureTextEntry, ...rest}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = useCallback(() => {
    setShowPassword(state => !state);
  }, []);

  return (
    <Container style={style}>
      {label && (<Label>{label}</Label>)}
      <Group>
        <TextInput secureTextEntry={secureTextEntry && !showPassword} {...rest} />
        {secureTextEntry && (
          <Button onPress={handlePress}>
            {!showPassword ? (
              <Entypo name="eye" size={24} color="#BFBFBF" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="#BFBFBF" />
            )}
          </Button>
        )}
      </Group>
    </Container>
  );
}

export default Input;