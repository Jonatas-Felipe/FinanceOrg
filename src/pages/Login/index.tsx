import React, { useCallback } from 'react';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Container, ReceptionText, H1, Group, Text } from './styles';
import Input from '../../components/Input';
import Link from '../../components/Link';
import Button from '../../components/Button';

const Login: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <Container>
      <ReceptionText style={{ fontFamily: 'Poppins_400Regular' }}>Bem-vindo novamente</ReceptionText>
      <H1  style={{ fontFamily: 'Poppins_600SemiBold' }}>Entrar</H1>
      <Input label="E-mail" keyboardType="email-address" style={{marginTop: 15}} />
      <Input label="Senha" secureTextEntry style={{marginTop: 15}} />
      <Link to="ForgotPassword" style={{fontFamily: 'Poppins_500Medium', marginTop: 15, marginBottom: 150}}>Esqueceu a senha?</Link>
      <Group style={{marginBottom: 30}}>
        <Text style={{fontFamily: 'Poppins_500Medium'}}>É novo aqui por aqui? </Text>
        <Link to='SignUp' style={{fontFamily: 'Poppins_500Medium', fontSize: 14, color: '#353535'}}>Começar</Link>
      </Group>
      <Button 
        type="primary"
        fontFamily="Poppins_700Bold"
        style={{height: 55}}
        onPress={handleSubmit}
      >Entrar</Button>
    </Container>
  );
}

export default Login;