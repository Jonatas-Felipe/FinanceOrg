import React, { useCallback, useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
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
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    const { height } = Dimensions.get("window");
    setMinHeight(height);
  }, []);

  const handlePressGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content minHeight={minHeight}>
        <ReturnButton onPress={handlePressGoBack}>
          <Ionicons name="arrow-back" size={24} color="#ACACAC" />
        </ReturnButton>
        <ReceptionText>Bem-vindo</ReceptionText>
        <H1>Cadastrar-se</H1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            label="Nome e sobrenome"
            placeholder="ex: João Silva"
            style={{ marginTop: 15 }}
          />
          <Input
            name="email"
            label="E-mail"
            placeholder="email@example.com"
            keyboardType="email-address"
            style={{ marginTop: 15 }}
          />
          <Input
            name="password"
            label="Senha"
            secureTextEntry
            style={{ marginTop: 15, marginBottom: 120 }}
          />
          <Group style={{ marginBottom: 30 }}>
            <P style={{ fontFamily: "Poppins_500Medium" }}>
              Já possui uma conta?{" "}
            </P>
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
          <SubmitButton
            type="primary"
            onPress={() => formRef.current?.submitForm()}
          >
            Cadastrar
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
