import styled from "styled-components/native";
import UsersThree from 'phosphor-react-native/src/icons/UsersThree';

export const Container = styled.View`

    flex:1;
    padding: 40px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Content = styled.View`

    flex: 1;
    justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size: 56,
    color: theme.COLORS.GREEN_700,
}))`

    align-self: center;
`;