import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const CameraButton = styled.TouchableOpacity`

width: 250px;
height: 120px;
margin-top: 64px;
align-self: center;
justify-content: center;
align-items: center;

border-width: 3px;
border-color: #232129;

`;

export const CameraText = styled.Text`
font-family: 'Montserrat-Regular';
color: #F5F5F5;
font-size: 19px;



`;

export const Title = styled.Text`
color: #F5F5F5;
margin-top: 78px;
font-size: 19px;
font-family: 'Montserrat-Regular';
text-align: center;
`;

export const Container = styled.View`
width: 350px;
height: 200px;
padding: 0 16px;
background: #232129;
border-radius: 10px;
margin-bottom: 100px;
border-width: 2px;
border-color: #F5F5F5;
align-self: center;
align-items: center;
flex-direction: row;`;

export const AppointmentText = styled.TextInput`
flex:1;
color: #28a745;
font-size: 19px;
font-family: 'Montserrat-Regular';
`;

export const ConfirmationButton = styled(RectButton)`

width: 300px;
height: 60px;
background: #F5F5F5;
border-radius: 10px;
margin-bottom: 28px;
margin-top: 50px;
align-self: center;


justify-content: center;
align-items: center;

`;

export const ConfirmationButtonText = styled.Text `
color: #015E90;
font-size: 19px;
font-family: 'Montserrat-Regular';
`;

export const ConfirmationButtonView = styled(RectButton)``;