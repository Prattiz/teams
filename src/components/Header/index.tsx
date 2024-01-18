import { Container, Logo } from "./styles";
import img from '@assets/Logo.png'

export function Header(){
    return(
        <Container>
            <Logo source={img}/>
        </Container>
    )
}