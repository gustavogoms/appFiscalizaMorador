import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton) `
width: 350px;
height: 60px;
background: #F5F5F5;
border-radius: 10px;
margin-top: 8px;

justify-content: center;
align-items: center;
`;

export const ButtonText = styled.Text `
font-family: 'Montserrat-Medium';
color: #015E90;
font-size: 18px;

`;
