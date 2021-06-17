import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 0 30px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #F5F5F5;
font-family: 'Montserrat-Medium';
margin: 24px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
margin-top: 24px
`;

export const ForgotPasswordText = styled.Text`
color: #F5F5F5;
font-size: 18px;
font-family: 'Montserrat-Regular'
`;

export const CreateAccountButton = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right: 0;

padding: 16px 0;

justify-content: center;
align-items: center;
flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
color: #F5F5F5;
font-size: 18px;
font-family: 'Montserrat-Regular';
margin-left: 16px;

`;
