import { Container, Logo, BackIcon, BackButton } from "./styles";
import img from '@assets/Logo.png';


type Props = {
    showBackButton?: boolean
}


export function Header({ showBackButton = false }: Props){
    return(
        <Container>
            {
                showBackButton && 
                
                <BackButton>
                    <BackIcon/>
                </BackButton>
            }
            
            <Logo source={img}/>
        </Container>
    )
}