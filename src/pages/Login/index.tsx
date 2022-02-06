import React, { useCallback } from "react";

import { Container, ReceptionText, H1, Group, P, SubmitButton } from "./styles";
import Input from "../../components/Input";
import Link from "../../components/Link";

const Login: React.FC = () => {
  const handleSubmit = useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <Container>
      <ReceptionText style={{ fontFamily: "Poppins_400Regular" }}>
        Bem-vindo novamente
      </ReceptionText>
      <H1 style={{ fontFamily: "Poppins_600SemiBold" }}>Entrar</H1>
      <Input
        label="E-mail"
        keyboardType="email-address"
        style={{ marginTop: 15 }}
      />
      <Input label="Senha" secureTextEntry style={{ marginTop: 15 }} />
      <Link
        to="ForgotPassword"
        style={{
          fontFamily: "Poppins_500Medium",
          marginTop: 15,
          marginBottom: 150,
        }}
      >
        Esqueceu a senha?
      </Link>
      <Group style={{ marginBottom: 30 }}>
        <P style={{ fontFamily: "Poppins_500Medium" }}>
          É novo aqui por aqui?{" "}
        </P>
        <Link
          to="SignUp"
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            color: "#353535",
          }}
        >
          Começar
        </Link>
      </Group>
      <SubmitButton
        type="primary"
        fontFamily="Poppins_700Bold"
        onPress={handleSubmit}
      >
        Entrar
      </SubmitButton>
    </Container>
  );
};

export default Login;
