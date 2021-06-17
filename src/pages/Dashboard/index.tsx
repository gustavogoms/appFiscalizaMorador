import React from 'react';
import { StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/images/FiscalizaMorador.svg';


import {
    Container, 
    Header, 
    HeaderText,
    HeaderContent,
    
} from './styles';


import Card from '../../components/card';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {

   // const { SignOut} = useAuth;

    return(
        <Container>
                
            
           <StatusBar

            barStyle="light-content"
            backgroundColor="transparent"
            translucent
            />
            
            

            
            <Header>
                <HeaderContent>
                <Logo 
                width={RFValue(108)}
                height={RFValue(40)}
                 />
                 <HeaderText>Selecione o serviço desejado</HeaderText>

                 </HeaderContent>

            </Header>
                       
            <Card />

        </Container>
    )
}

export default Dashboard






/* import React from 'react';
//import { useAuth } from '../../hooks/Auth';
import { useNavigation } from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { AppointmentItemList, AppointmentItemListText, Title, Container} from './styles';

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    //const { signOut } = useAuth();



    return (
        <>
        <Container>
        <Title>  Selecione o serviço desejado </Title>
        </Container>
        <AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
        <Icon name="zap" color="#F5F5F5" size={25} />

        <AppointmentItemListText> Reparo de lâmpada apagada </AppointmentItemListText>
    </AppointmentItemList>

    <AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
<AntIcon name="car" size={23} color='#F5F5F5' />

<AppointmentItemListText> Reparo de sinal de trânsito </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
<Icon name="cloud-rain" size={23} color='#F5F5F5' />

<AppointmentItemListText> Desobstrução de boeiros </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
<Icon name="target" size={20} color='#F5F5F5' />

<AppointmentItemListText> Reparo de buraco na rua/pista </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
<Entypo name="bug" size={20} color='#F5F5F5' />

<AppointmentItemListText> Vistoria em foco de dengue </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('AppointmentMap')}>
<Icon name="tool" size={20} color='#F5F5F5' />

<AppointmentItemListText> Outros </AppointmentItemListText>
</AppointmentItemList>


</>
    )

}

export default Dashboard

*/