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

const Dashboard: React.FC = () => {
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



