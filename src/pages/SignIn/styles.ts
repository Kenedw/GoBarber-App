import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1%;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  border: 1px solid #231129;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  background: #312e38;
`;

export const CreateAccountText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
