import React, { useCallback } from 'react';
import { Container, Title, OkButton, OkButtonText } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../hooks/Auth';

const Conclusion: React.FC = ()=> {
    const { signOut } = useAuth();
    const { reset } = useNavigation();

    const handleOkPressed = useCallback(() => {

        reset({
            routes: [{ name: 'Dashboard'}],
            index: 0,
        });
    }, [reset])

    return <Container>
        <Icon name='check-square' size={110} color="#F5F5F5" />
        <Title> Ocorrência aberta com sucesso! </Title>
        <OkButton onPress={signOut}>
            <OkButtonText>
                Ok
            </OkButtonText>
             </OkButton>
         </Container>;

};

export default Conclusion;