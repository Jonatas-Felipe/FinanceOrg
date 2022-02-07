import React, { useCallback } from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

interface ILinkProps extends TouchableOpacityProps {
  to: string;
  fontFamily?: string;
  style?: {
    [key: string]: string | number;
  };
}

const Link: React.FC<ILinkProps> = ({ children, to, style, ...rest }) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate(to as any);
  }, [navigation, to]);

  return (
    <Container onPress={handlePress} {...rest}>
      <Text style={style}>{children}</Text>
    </Container>
  );
};

export default Link;
