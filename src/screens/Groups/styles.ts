import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    padding: 40px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`

    color: ${({theme}) => theme.COLORS.GREEN_500};
`;
