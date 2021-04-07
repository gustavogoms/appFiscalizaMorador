import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
padding: 0 30px;
`;

export const Title = styled.Text`
font-size: 29px;
color: #EBC42A;
font-family: 'Montserrat-Medium';
margin: 64px 0 24px;
`;


export const BackToSignInButton = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right: 0;

padding: 16px 0;

justify-content: center;
align-items: center;
flex-direction: row;
`;

export const BackToSignInButtonText = styled.Text`
color: #EBC42A;
font-size: 18px;
font-family: 'Montserrat-Regular';
margin-left: 16px;

`;
