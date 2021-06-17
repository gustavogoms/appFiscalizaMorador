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
color: #F5F5F5;
font-family: 'Montserrat-Medium'
margin-top: 48px;
text-align: center;

`;

export const OkButton = styled(RectButton) `
width: 90px;
height: 60px;
background: #F5F5F5;
border-radius: 10px;
margin-top: 12px;

justify-content: center;
align-items: center;

`;

export const OkButtonText = styled.Text `
font-family: 'Montserrat-Medium';
color: #222;
font-size: 18px;

`;