import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    position: relative;
  `}
`;

export const Image = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 70%;
    padding: 20px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    padding: 20px;
  `}
`;

export const Button = styled.Button`
  color: white;
  background-color: white;
`;
