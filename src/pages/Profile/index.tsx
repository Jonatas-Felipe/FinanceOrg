import React, { useCallback, useRef, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";

import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  H1,
  ProfileGroup,
  Avatar,
  H2,
  InputGroup,
  LabelGroup,
  Label,
  EditButton,
  SubmitButton,
} from "./styles";

import Input from "../../components/Input";

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [disabled, setDisabled] = useState(true);

  const handlePressEdit = useCallback(() => {
    setDisabled((state) => !state);
  }, []);

  const handlePressGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Container>
        <Header>
          <TouchableOpacity onPress={handlePressGoBack}>
            <Ionicons name="chevron-back" size={24} color="#000000" />
          </TouchableOpacity>
          <H1>Dados pessoais</H1>
        </Header>
        <ProfileGroup>
          <Avatar
            source={{ uri: "https://placeimg.com/50/50/any" }}
            resizeMode="cover"
          />
          <H2>Jonatas Felipe</H2>
        </ProfileGroup>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputGroup>
            <View style={{ width: disabled ? "90%" : "100%" }}>
              <LabelGroup>
                <Label>Nome</Label>
                <FontAwesome name="id-card-o" size={12} color="#939393" />
              </LabelGroup>
              <Input
                name="name"
                style={{
                  borderBottomWidth: disabled ? 0 : 1,
                }}
                value="Jonatas Felipe"
                disabled={disabled}
              />
            </View>
            {disabled && (
              <EditButton onPress={handlePressEdit}>
                <MaterialIcons name="edit" size={20} color="#A4A4A4" />
              </EditButton>
            )}
          </InputGroup>
          <InputGroup>
            <View style={{ width: disabled ? "90%" : "100%" }}>
              <LabelGroup>
                <Label>E-mail</Label>
                <Feather name="mail" size={12} color="#939393" />
              </LabelGroup>
              <Input
                name="email"
                style={{
                  borderBottomWidth: disabled ? 0 : 1,
                }}
                value="jonatas@wodo.com.br"
                disabled={disabled}
              />
            </View>
            {disabled && (
              <EditButton onPress={handlePressEdit}>
                <MaterialIcons name="edit" size={20} color="#A4A4A4" />
              </EditButton>
            )}
          </InputGroup>
          <InputGroup>
            <View style={{ width: disabled ? "90%" : "100%" }}>
              <LabelGroup>
                <Label>Senha</Label>
                <Ionicons
                  name="lock-closed-outline"
                  size={12}
                  color="#939393"
                />
              </LabelGroup>
              <Input
                name="password"
                style={{
                  borderBottomWidth: disabled ? 0 : 1,
                }}
                value="123123123"
                secureTextEntry
                showIcon={!disabled}
                disabled={disabled}
              />
            </View>
            {disabled && (
              <EditButton onPress={handlePressEdit}>
                <MaterialIcons name="edit" size={20} color="#A4A4A4" />
              </EditButton>
            )}
          </InputGroup>
          {!disabled && (
            <SubmitButton
              type="primary"
              onPress={() => formRef.current?.submitForm()}
            >
              Salvar
            </SubmitButton>
          )}
        </Form>
      </Container>
    </ScrollView>
  );
};

export default Profile;
