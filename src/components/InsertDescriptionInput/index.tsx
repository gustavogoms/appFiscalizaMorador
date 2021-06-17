import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
}

const InsertDescriptionInput: React.FC<InputProps> = ({name, ...rest}) => (
    <Container>
        <TextInput 
        multiline
        placeholderTextColor="#666360" 
        {...rest} />
    </Container>
);

export default InsertDescriptionInput;