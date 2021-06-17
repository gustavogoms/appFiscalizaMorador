import React, { useState } from 'react';
import {
  CameraButton, Title, CameraText, Container, AppointmentText,
  ConfirmationButton, ConfirmationButtonText, ConfirmationButtonView
} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import InsertDescriptionInput from '../../components/InsertDescriptionInput';
import * as ImagePicker from 'react-native-image-picker';


const InsertInformation: React.FC = () => {

  const navigation = useNavigation();

  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | undefined>('');

  function handleRegister() {
    navigation.navigate('Conclusion')
    const data = {
      description,
      image
    }

    console.log(data);
  };

  function handleImage() {

    const result = ImagePicker.launchCamera({
      mediaType: 'photo',
      quality: 1
    }, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        return;
      }
      else {
        
        setImage(response.uri)


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
          onChangeText={setDescription}
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



/*
<ConfirmationButton onPress={() => navigation.navigate('Conclusion')}>

*/
