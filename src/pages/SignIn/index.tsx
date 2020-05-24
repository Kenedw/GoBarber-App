import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled">
        <Container>
          <Image source={logoImg} />
          <Title>Faça seu logon</Title>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button>Entrar</Button>
          <ForgotPasswordButton>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordButton>
        </Container>
      </ScrollView>
      <CreateAccountButton>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
