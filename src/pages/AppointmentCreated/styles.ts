import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View `
flex: 1;
justify-content: center;
align-items: center;
padding: 0 24px;

`;

export const Title = styled.Text `
font-size: 22px;
color: #f1f1f1;
font-family: 'Montserrat-Medium'
margin-top: 48px;
text-align: center;

`;

export const OkButton = styled(RectButton) `
background: #EBC42A;
justify-content: center;
align-items: center;
border-radius: 10px;
margin-top: 24px;
padding: 12px 24px;
`;

export const OkButtonText = styled.Text `
font-family: 'Montserrat-Medium';
color: #232129;
font-size: 18px;

`;