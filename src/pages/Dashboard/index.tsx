import React from 'react';
import { useAuth } from '../../hooks/Auth';
import { useNavigation } from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { AppointmentItemList, AppointmentItemListText, Title, Container} from './styles';

const Dashboard: React.FC = () => {
    const navigation = useNavigation();

    const { signOut } = useAuth();



    return (
        <>
        <Container>
        <Title>  Selecione o serviço desejado </Title>
        </Container>
        <AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
        <Icon name="zap" color="#EBC42A" size={25} />

        <AppointmentItemListText> Reparo de lâmpada apagada </AppointmentItemListText>
    </AppointmentItemList>

    <AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
<AntIcon name="car" size={23} color='#EBC42A' />

<AppointmentItemListText> Reparo de sinal de trânsito </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
<Icon name="cloud-rain" size={23} color='#EBC42A' />

<AppointmentItemListText> Desobstrução de boeiros </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
<Icon name="target" size={20} color='#EBC42A' />

<AppointmentItemListText> Reparo de buraco na rua/pista </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
<Entypo name="bug" size={20} color='#EBC42A' />

<AppointmentItemListText> Vistoria em foco de dengue </AppointmentItemListText>
</AppointmentItemList>

<AppointmentItemList onPress={() => navigation.navigate('InsertAppointment')}>
<Icon name="tool" size={20} color='#EBC42A' />

<AppointmentItemListText> Outros </AppointmentItemListText>
</AppointmentItemList>


</>
    )

}

export default Dashboard