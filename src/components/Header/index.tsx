import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackIcon, BackButton } from "./styles";
import img from '@assets/Logo.png';


type Props = {
    showBackButton?: boolean
}


export function Header({ showBackButton = false }: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate('groups')
    }

    return(
        <Container>
            {
                showBackButton && 
                
                <BackButton onPress={handleGoBack}>
                    <BackIcon/>
                </BackButton>
            }
            
            <Logo source={img}/>
        </Container>
    )
}