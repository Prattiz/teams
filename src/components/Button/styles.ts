import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonColorProps = 'primary' | 'secondary';

type Props = {
    type: ButtonColorProps
}

export const Container = styled(TouchableOpacity)<Props>`

    flex:1;
    max-height: 56px;
    min-width: 56px;
    background-color: ${({theme, type}) => (
        type === 'primary'? 
            theme.COLORS.GREEN_700 
            :
            theme.COLORS.RED_DARK
    )};

    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
        `
    };
    
    
`;