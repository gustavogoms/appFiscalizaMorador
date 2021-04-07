import React, {useCallback, useRef} from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import Button from '../../components/button';

import { Container,
     Title,
     ForgotPassword,
     ForgotPasswordText,
     CreateAccountButton,
     CreateAccountButtonText } from './styles';

import FiscalizaMorador from '../../../src/assets/images/AmareloFiscalizaMorador.png';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    formRef.current?.setFieldValue

    const handleSignIn = useCallback((data: object) => {
        console.log(data);
    }, []);

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

        <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText> Esqueci a minha senha </ForgotPasswordText>
        </ForgotPassword>
        
        
    </Container>

    </ScrollView>

    </KeyboardAvoidingView>

        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color='#EBC42A' />
            
            <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
            
             </CreateAccountButton>
      
    </>
    );
    };

export default SignIn;