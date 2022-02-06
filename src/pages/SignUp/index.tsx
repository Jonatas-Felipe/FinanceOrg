import React from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  ReturnButton,
  ReceptionText,
  H1,
  Group,
  P,
  SubmitButton,
} from "./styles";
import Input from "../../components/Input";
import Link from "../../components/Link";

const SignUp: React.FC = () => {
  return (
    <Container>
      <ReturnButton>
        <Ionicons name="arrow-back" size={24} color="#ACACAC" />
      </ReturnButton>
      <ReceptionText>Bem-vindo</ReceptionText>
      <H1>Cadastrar-se</H1>
      <Input
        label="Nome e sobrenome"
        placeholder="ex: João Silva"
        style={{ marginTop: 15 }}
      />
      <Input
        label="E-mail"
        placeholder="email@example.com"
        keyboardType="email-address"
        style={{ marginTop: 15 }}
      />
      <Input
        label="Senha"
        secureTextEntry
        style={{ marginTop: 15, marginBottom: 120 }}
      />
      <Group style={{ marginBottom: 30 }}>
        <P style={{ fontFamily: "Poppins_500Medium" }}>Já possui uma conta? </P>
        <Link
          to="Login"
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            color: "#353535",
          }}
        >
          Entrar
        </Link>
      </Group>
      <SubmitButton type="primary" fontFamily="Poppins_700Bold">
        Cadastrar
      </SubmitButton>
    </Container>
  );
};

export default SignUp;
