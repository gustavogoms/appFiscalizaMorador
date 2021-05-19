import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


export const AppointmentImageButton = styled.TouchableOpacity``;

export const AppointmentImage = styled.Image`
width: 186px;
height: 186px;
margin-top: 64px;
align-self: center;
`;

export const Title = styled.Text`
flex: 1;
color: #EBC42A;
margin-top: 85px;
font-size: 19px;
font-family: 'Montserrat-Regular';
text-align: center;
`;

export const Container = styled.View`
width: 100%;
height: 200px;
padding: 0 16px;
background: #232129;
border-radius: 20px;
margin-bottom: 50px;
border-width: 2px;
border-color: #232129;

align-items: center;
flex-direction: row;`;

export const ContainerText = styled.TextInput`
flex: 1;
color: #EBC42A;
font-size: 19px;
font-family: 'Montserrat-Regular';
`;

export const ConfirmationButton = styled(RectButton)`

width: 100%;
height: 60px;
background: #EBC42A;
border-radius: 10px;
margin-top: 8px;

justify-content: center;
align-items: center;
`;

export const ConfirmationButtonText = styled.Text `
color: #000;
font-size: 19px;
font-family: 'Montserrat-Regular';
`;
