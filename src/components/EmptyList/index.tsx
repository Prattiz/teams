import { Container, Menssage } from './styled';

type Props = {
    message: string,
}


export function EmptyList({ message }: Props){
    return(
        <Container>
            <Menssage>{ message }</Menssage>
        </Container>
    )
}