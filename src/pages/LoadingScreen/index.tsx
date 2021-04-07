import React from 'react';
import { Image } from 'react-native';

import FiscalizaMorador from '../../assets/images/AmareloFiscalizaMorador.png';
import { Container } from './styles';


const LoadingScreen: React.FC = () => {

    return (

        <>

    <Container>

    <Image source={FiscalizaMorador} />
    
    

    </Container>

    </>

);

}


export default LoadingScreen;
