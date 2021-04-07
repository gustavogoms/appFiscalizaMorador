import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton) `
width: 100%;
height: 60px;
background: #EBC42A;
border-radius: 10px;
margin-top: 8px;

justify-content: center;
align-items: center;
`;

export const ButtonText = styled.Text `
font-family: 'Montserrat-Medium';
color: #1C1C1C;
font-size: 18px;

`;
