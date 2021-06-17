import React, {useCallback, useRef} from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/Auth';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErros from '../../utils/getValidationErrors';

import { Container,
     Title,
     CreateAccountButton,
     CreateAccountButtonText } from './styles';


    interface SignInFormData {
        email: string;
        password: string;
    }    

import FiscalizaMorador from '../../assets/images/BrancoFiscalizaMorador.png';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const { signIn, user } = useAuth();

    formRef.current?.setFieldValue

    const handleSignIn = useCallback(
        async (data: SignInFormData) => {
          try {
            formRef.current?.setErrors({});
    
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().required('Senha obrigatória'),
            });
            await schema.validate(data, {
              abortEarly: false,
            });
    
            await signIn({
              
              email: data.email,
              password: data.password,
            });
            console.log("teste2")

          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErros(err);
              formRef.current?.setErrors(errors);
            }
            Alert.alert(
              'Erro na autenticação',
              'Ocorreu um erro ao fazer login, cheque as credenciais',
            );
          }
        },
        [SignIn],
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
        <Image source={FiscalizaMorador} />
        <View>
        <Title>
            Faça o seu login
        </Title>

        </View>

        <Form ref={formRef} onSubmit={handleSignIn}>

        <Input
         keyboardType="email-address"
         autoCapitalize="none"
         name= "email" 
         icon="mail" 
         placeholder="E-mail"
         returnKeyType='next' />

        <Input 
        ref={passwordInputRef}
        name="password" 
        icon="lock" 
        placeholder="Senha"
        secureTextEntry
        returnKeyType='send'
        onSubmitEditing={() => {formRef.current?.submitForm();
        }}
        />


        <Button onPress={() => {formRef.current?.submitForm();
        }}> Entrar </Button>

</Form>
        
        
    </Container>

    </ScrollView>

    </KeyboardAvoidingView>

        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color='#F5F5F5' />
            
            <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
            
             </CreateAccountButton>
      
    </>
    );
    };

export default SignIn;