import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {

    icon: keyof typeof MaterialIcons.glyphMap,
    type?: ButtonIconStyleProps
}
export function IconButton({ icon, type = 'secondary', ...rest  }: Props){
    return(
        <Container {...rest}>
            <Icon
                name={icon} 
                type={type}
            />
        </Container>
    )
}