import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, DescriptionText } from './styles';
import { useAppState } from '../../hooks';

const tipoDeOcorrencia = [{ id: 1, name: 'Reparo de lampada apagada' },
{ id: 2, name: 'Reparo de sinal de transito' },
{ id: 3, name: 'Desobstrução de bueiros' },
{ id: 4, name: 'Reparo de buraco na rua/pista' },
{ id: 5, name: 'Vistoria em foco de dengue' },
{ id: 6, name: 'outros' }]

const Card: React.FC = () => {
    const [appState, setAppState] = useAppState();

    const navigation = useNavigation();

    const onOcorrenciaSelected = (item: any) => {
        setAppState({
            ...appState,
            ocorrenciaId: item.id
        })
        navigation.navigate('AddAdress')
    }


    return (
        <>
        {tipoDeOcorrencia.map((item) => (
            <Container key={item.id} onPress={() => onOcorrenciaSelected(item)}>
            <DescriptionText>
                {item.name}
            </DescriptionText>
        </Container>
        ) )}
            
        </>


    )


}

export default Card;