import React, { useCallback } from 'react';
import { AppointmentImageButton, AppointmentImage, Title, Container, ContainerText,
ConfirmationButton, ConfirmationButtonText } from './styles';
import PhotoCamera from '../../assets/images/PhoroCamera.png';
import { useNavigation } from '@react-navigation/native';

//import { launchCamera} from 'react-native-image-picker';


const InsertAppointment: React.FC = () => {
  const navigation = useNavigation();


    return (

        
        <>
            <AppointmentImageButton onPress={() => {}}>
              <AppointmentImage source={PhotoCamera}/>  
            </AppointmentImageButton>

            <Title>
              Insira a descrição da ocorrência
            </Title>
            <Container>
              <ContainerText />
            </Container>
            <ConfirmationButton onPress={() => navigation.navigate('AppointmentCreated')}> 
              <ConfirmationButtonText>
              Encaminhar ocorrência
                </ConfirmationButtonText> 
            </ConfirmationButton>
                        </>
    )


}

export default InsertAppointment;