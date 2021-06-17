import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton) `
width: 350px;
height: 85px;
background-color: #1C1C1C;
justify-content: space-between;
align-items: center;
align-self: center;


padding: 24px;
margin-top: 16px;

`;
export const DescriptionText = styled.Text`
margin-top: 8px;
font-family: 'Montserrat-Medium';
font-size: 20px;
color: #f5f5f5;
align-items: center;


`;

