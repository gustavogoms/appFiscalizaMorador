import React, { useState } from 'react';
import {
  CameraButton, Title, CameraText, Container, AppointmentText,
  ConfirmationButton, ConfirmationButtonText
} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import InsertDescriptionInput from '../../components/InsertDescriptionInput';
import * as ImagePicker from 'react-native-image-picker';
import { useAppState } from '../../hooks';
import api from '../../services/api';
import {useAuth} from '../../hooks/Auth';

const InsertInformation: React.FC = () => {
  const navigation = useNavigation();
  const [appState, setAppState] = useAppState();
  const {user} = useAuth();

  async function handleRegister() {
    console.log(user)
    const response = await api.post('occurrence', {
      user_id: user.id,
      type: appState.ocorrenciaId,
      location: appState.address,
      photo: appState.image,
      description: appState.description,

    });
    navigation.navigate('Conclusion')
  };

  const updateDescription = (description: any) => {
    setAppState({
      ...appState,
      description
    })
  }

  function handleImage() {
    const result = ImagePicker.launchCamera({
      mediaType: 'photo',
      quality: 1
    }, (response) => {
      if (response.didCancel) {
        return;
      } else {
        setAppState({
          ...appState,
          image: response.uri
        })
      }
    });
  }

  return (
    <>
      <CameraButton onPress={handleImage}>
        <Entypo name="camera" size={50} color='#222' />
        <CameraText> Tirar foto da ocorrência </CameraText>
      </CameraButton>

      <Title>
        Descrição da ocorrência
      </Title>
      <Container>
        <InsertDescriptionInput
          name="ocorrencia"
          placeholder="Favor inserir a descrição da ocorrência"
          onChangeText={updateDescription}
          returnKeyType='done'

        />
        <AppointmentText />
      </Container>
      <ConfirmationButton onPress={handleRegister}>

        <ConfirmationButtonText>
          Encaminhar ocorrência
        </ConfirmationButtonText>
      </ConfirmationButton>
    </>
  )


}

export default InsertInformation;


