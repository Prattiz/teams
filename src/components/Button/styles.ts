import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonColorProps = 'red' | 'green';

type Props = {
    type: ButtonColorProps
}

export const Container = styled(TouchableOpacity)<Props>`

    flex:1;
    max-height: 56px;
    min-width: 56px;
    background-color: ${({theme, type}) => (
        type === 'green'? 
            theme.COLORS.GREEN_700 
            :
            theme.COLORS.RED_DARK
    )};

    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`

    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
`;