import { ButtonColorProps, Container, Message } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    text: string,
    type?: ButtonColorProps
    
}

export function Button({ text, type='primary', ...rest }: Props){
    return(
        <Container 
            type={type}
            {...rest}>
                
            <Message>{text}</Message>
        </Container>
    )
}