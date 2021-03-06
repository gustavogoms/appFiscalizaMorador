import React, {useRef, useCallback} from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Alert, AlertType } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation} from '@react-navigation/native';
import  { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import Button from '../../components/button';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container,Title, BackToSignInButton,BackToSignInButtonText } from './styles';

interface SignUpFormData {
    email: string;
    name: string;
    password: string;
}


const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();
    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);


    const handleSingUp = useCallback(
        async (data: SignUpFormData) => {
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().min(6, 'No mínimo 6 caracteres'),
            });
            await schema.validate(data, {
              abortEarly: false,
            });
            await api.post('/users', data);
            Alert.alert(
              'Cadastro realizado com sucesso',
              'Você já pode fazer login na sua aplicação',
            );
    
            navigation.navigate('SignIn');
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              formRef.current?.setErrors(errors);
            }
            Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer o cadastro');
          }
        },
        [navigation],
      );


    return (
    <> 
    <KeyboardAvoidingView
    style={{ flex:1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    enabled>

        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        
    <Container>
        <View>
        <Title>
            Crie sua conta
        </Title>

        </View>

        <Form ref={formRef} onSubmit={handleSingUp}> 
        <Input 
        autoCapitalize="words" 
        name= "name" 
        icon="user" 
        placeholder="Nome"
        returnKeyType="next"
        onSubmitEditing={() => {
            emailInputRef.current?.focus()
        }}
        />

        <Input
        ref={emailInputRef} 
        keyboardType="email-address" 
        autoCapitalize='none'
        autoCorrect={false}
        name= "email" 
        icon="mail" 
        placeholder="E-mail"
        returnKeyType="next"
        onSubmitEditing={() => {
            passwordInputRef.current?.focus()
        }}
        />

        <Input
         ref={passwordInputRef}
         secureTextEntry
         name="password"
         icon="lock" 
         placeholder="Senha"
         returnKeyType='send'
         onSubmitEditing={()=>formRef.current?.submitForm()}
         />
        


        <Button onPress={() => formRef.current?.submitForm()}> Entrar </Button>

        </Form>


        
    </Container>

    </ScrollView>

    </KeyboardAvoidingView>

        <BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
            <Icon name="arrow-left" size={20} color='#f1f1f1' />
            
            <BackToSignInButtonText> Voltar para login  </BackToSignInButtonText>
            
             </BackToSignInButton>
      
    </>
    );
    };

export default SignUp;