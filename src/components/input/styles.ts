import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View `
width: 350px;
height: 60px;
padding: 0 16px;
background: #232129;
border-radius: 10px;
margin-bottom: 8px;
border-width: 2px;
border-color: #232129;

align-items: center;
flex-direction: row;


${(props) => 
    props.isErrored && 
    css `
border-color: #c53030;
`}

${(props) => 
    props.isFocused && 
    css `
border-color: #28a745
`}

`;

export const TextInput = styled.TextInput `
flex: 1;
color: #28a745;
font-size: 16px;
font-family: 'Montserrat-Regular';
`;
export const Icon = styled(FeatherIcon) `
margin-right: 16px;
`;