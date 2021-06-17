import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, DescriptionText } from './styles';

const Card: React.FC = () => {

    const navigation = useNavigation();


    return(
        <>
        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
                Reparo de lâmpada apagada
            </DescriptionText>
        </Container>
        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
            Reparo de sinal de trânsito 
            </DescriptionText>
        </Container>

        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
            Desobstrução de bueiros             
            </DescriptionText>
        </Container>
        

        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
            Reparo de buraco na rua/pista
            </DescriptionText>
        </Container>
        

        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
            Vistoria em foco de dengue
            </DescriptionText>
        </Container>

        <Container onPress={() => navigation.navigate('AddAdress')}>
            <DescriptionText>
            Outros
            </DescriptionText>
        </Container>
        </>

        
    )


}

export default Card;