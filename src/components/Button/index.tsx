import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  type?: "primary" | "secodary";
  fontFamily?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  fontFamily,
  ...rest
}) => {
  return (
    <Container type={type} {...rest}>
      <Text type={type} style={{ fontFamily }}>
        {children}
      </Text>
    </Container>
  );
};

export default Button;
