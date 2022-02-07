import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  P,
  BalanceGroup,
  H2,
  Display4,
  OldbalanceGroup,
  B,
} from "./styles";

const Balance: React.FC = () => {
  const [balanceHide, setBalanceHide] = useState(false);

  const handlePress = useCallback(() => {
    setBalanceHide((state) => !state);
  }, []);
  return (
    <Container>
      <P>saldo conta total</P>
      <BalanceGroup>
        <H2>R$</H2>
        <Display4>{balanceHide ? "•••••••••" : "2.000,00"}</Display4>
        <TouchableOpacity onPress={handlePress}>
          {balanceHide ? (
            <Ionicons name="eye" size={25} color="#BFBFBF" />
          ) : (
            <Ionicons name="eye-off" size={25} color="#BFBFBF" />
          )}
        </TouchableOpacity>
      </BalanceGroup>
      <OldbalanceGroup>
        <P>Saldo anterior total: R$</P>
        <B>1000,00</B>
      </OldbalanceGroup>
    </Container>
  );
};

export default Balance;
