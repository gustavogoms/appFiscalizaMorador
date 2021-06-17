import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;



`;

export const Header = styled.View `
width: 100%;
height: 130px;

background-color: #1C1C1C;

justify-content: flex-end;
padding: 12px 50px;


`;

export const HeaderContent = styled.View`
    align-items: center;
justify-content: space-between;

`;

export const HeaderText = styled.Text `
font-size: ${RFValue(20)}px;
color: #f5f5f5;
font-family: 'Montserrat-Medium';

`;


export const Title = styled.Text`
font-family: 'Montserrat-Medium';
color: #fff;
font-size:25px;
`;



/* import styled from 'styled-components/native';

export const Container = styled.View`
align-items: center
`;

export const Title = styled.Text`
color: #F5F5F5;
font-size: 26px;
margin: 24px 0 24px;
font-family: 'Montserrat-medium'
`;

export const AppointmentItemList = styled.TouchableOpacity`

flex-direction: row;
margin-top: 70px
border-bottom-width: 1px;
border-color: #312e38
`;

export const AppointmentItemListText = styled.Text`
color: #F5F5F5;
font-size: 20px;
font-family: 'Montserrat-Regular'

`;

*/