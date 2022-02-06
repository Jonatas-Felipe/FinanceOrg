import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Container, H1, PriceGroup, H2, Display4, P } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <H1>Olá, Felipe</H1>
      <P>saldo conta total</P>
      <PriceGroup>
        <H2>R$</H2>
        <Display4>2.000,00</Display4>
        <Ionicons name="eye-off" size={25} color="#BFBFBF" />
      </PriceGroup>
    </Container>
  );
};

export default Dashboard;
