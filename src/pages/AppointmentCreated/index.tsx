import React, { useCallback } from 'react';
import { Container, Title, OkButton, OkButtonText } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core';

const AppointmentCreated: React.FC = ()=> {
    const { reset } = useNavigation();

    const handleOkPressed = useCallback(() => {

        reset({
            routes: [{ name: 'SignIn'}],
            index: 0,
        });
    }, [reset])

    return <Container>
        <Icon name='check-square' size={110} color="#EBC42A" />
        <Title> Ocorrência aberta com sucesso! </Title>
        <OkButton onPress={handleOkPressed}>
            <OkButtonText>
                Ok
            </OkButtonText>
             </OkButton>
         </Container>;

};

export default AppointmentCreated;