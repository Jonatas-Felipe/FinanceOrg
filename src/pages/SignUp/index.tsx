import React from 'react';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';

import { Container, ReceptionText, H1, Group, Text } from './styles';
import Input from '../../components/Input';
import Link from '../../components/Link';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <Button style={{width: 24, marginTop: 20, marginBottom: 20}}>
        <Ionicons name="arrow-back" size={24} color="#ACACAC" />
      </Button>
      <ReceptionText style={{ fontFamily: 'Poppins_400Regular' }}>Bem-vindo</ReceptionText>
      <H1  style={{ fontFamily: 'Poppins_600SemiBold' }}>Cadastrar-se</H1>
      <Input label="Nome e sobrenome" placeholder="ex: João Silva" style={{marginTop: 15}} />
      <Input label="E-mail"  placeholder="email@example.com" keyboardType="email-address" style={{marginTop: 15}} />
      <Input label="Senha" secureTextEntry style={{marginTop: 15, marginBottom: 120}} />
      <Group style={{marginBottom: 30}}>
        <Text style={{fontFamily: 'Poppins_500Medium'}}>Já possui uma conta? </Text>
        <Link to='Login' style={{fontFamily: 'Poppins_500Medium', fontSize: 14, color: '#353535'}}>Entrar</Link>
      </Group>
      <Button type="primary" fontFamily="Poppins_700Bold" style={{height: 55}}>Cadastrar</Button>
    </Container>
  );
}

export default SignUp;