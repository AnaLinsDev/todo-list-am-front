import React from "react";
import AnimatedLottieView from "lottie-react-native";

import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";


export function Button({ title, ...rest }) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}