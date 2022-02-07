import React, { useCallback } from 'react';
import { Ionicons, AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native';
import {
  Container,
  Welcome,
  H1,
  ProfileButton,
  Avatar,
  MyCards,
  H3,
  CardsGroup,
  Card,
  CardDetail,
  CardTitle,
  CardText,
  CardExpenses,
  Activities,
  ActivitiesGroup,
  Activity,
  ActivityIcon,
  ActivityTitle,
} from './styles';
import Balance from '../../components/Balance';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const handlePressProfile = useCallback(() => {
    navigation.navigate('Profile' as any);
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Container>
        <Welcome>
          <H1>Olá, Felipe</H1>
          <ProfileButton onPress={handlePressProfile}>
            <Avatar
              source={{ uri: 'https://placeimg.com/40/40/any' }}
              resizeMode="cover"
            />
          </ProfileButton>
        </Welcome>
        <Balance />
        <MyCards>
          <H3>Meus cartões</H3>
          <CardsGroup horizontal>
            <Card first colors={['#6200ff', '#380059']}>
              <CardDetail />
              <CardTitle>Nubank</CardTitle>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 166,01</CardExpenses>
            </Card>
            <Card colors={['#00FFD1', '#005959']}>
              <CardDetail />
              <CardTitle>Next</CardTitle>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 66,01</CardExpenses>
            </Card>
            <Card last colors={['#f93a3a', '#b91414']}>
              <CardDetail />
              <CardTitle>Bradesco</CardTitle>
              <CardText>Gastos</CardText>
              <CardExpenses>R$ 16,01</CardExpenses>
            </Card>
          </CardsGroup>
        </MyCards>
        <Activities>
          <H3>Atividades</H3>
          <ActivitiesGroup>
            <Activity
              style={{
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 5,
              }}
              onPress={() => navigation.navigate('History' as any)}
            >
              <>
                <ActivityIcon>
                  <AntDesign name="swap" size={24} color="#626262" />
                </ActivityIcon>
                <ActivityTitle>Gastos</ActivityTitle>
              </>
            </Activity>
            <Activity
              className="mx-9px"
              style={{
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 5,
              }}
              onPress={() => navigation.navigate('Cards' as any)}
            >
              <>
                <ActivityIcon>
                  <Ionicons name="ios-card" size={20} color="#626262" />
                </ActivityIcon>
                <ActivityTitle>Cartões</ActivityTitle>
              </>
            </Activity>
            <Activity
              style={{
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 5,
              }}
            >
              <>
                <ActivityIcon>
                  <Fontisto name="bar-chart" size={15} color="#626262" />
                </ActivityIcon>
                <ActivityTitle>Análise de finanças</ActivityTitle>
              </>
            </Activity>
          </ActivitiesGroup>
        </Activities>
      </Container>
    </ScrollView>
  );
};

export default Dashboard;
