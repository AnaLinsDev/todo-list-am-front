import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: #6a72eb;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 17px;
    color: black;
  `}
`;