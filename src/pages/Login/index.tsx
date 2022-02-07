import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { Dimensions } from "react-native";

import {
  Container,
  Content,
  ReceptionText,
  H1,
  Group,
  P,
  SubmitButton,
} from "./styles";
import Input from "../../components/Input";
import Link from "../../components/Link";

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const { height } = Dimensions.get("window");
    setMinHeight(height);
  }, []);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content minHeight={minHeight}>
        <ReceptionText style={{ fontFamily: "Poppins_400Regular" }}>
          Bem-vindo novamente
        </ReceptionText>
        <H1 style={{ fontFamily: "Poppins_600SemiBold" }}>Entrar</H1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            label="E-mail"
            keyboardType="email-address"
            style={{ marginTop: 15 }}
          />
          <Input
            name="password"
            label="Senha"
            secureTextEntry
            style={{ marginTop: 15 }}
          />
        </Form>
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
          onPress={() => formRef.current?.submitForm()}
        >
          Entrar
        </SubmitButton>
      </Content>
    </Container>
  );
};

export default Login;
