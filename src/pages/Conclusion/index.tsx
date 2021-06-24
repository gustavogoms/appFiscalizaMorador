import React from 'react';
import { Container, Title, OkButton, OkButtonText } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../hooks/Auth';
import { useAppState } from '../../hooks';

const Conclusion: React.FC = () => {
    const { signOut, user } = useAuth();
    const { reset } = useNavigation();
    const [appState, setAppState] = useAppState();

    const handleOkPressed = async () => {
        reset({
            routes: [{ name: 'Dashboard' }],
            index: 0,
        });

    };

    return <Container>
        <Icon name='check-square' size={110} color="#F5F5F5" />
        <Title> Ocorrência aberta com sucesso!
        </Title>
        <OkButton onPress={handleOkPressed}>
            <OkButtonText>
                Ok
            </OkButtonText>
        </OkButton>
    </Container>;

};

export default Conclusion;