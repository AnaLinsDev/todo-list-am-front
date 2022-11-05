import React from "react";
import LottieView from "lottie-react-native";

import gif from "./giphyWelcome.json";

import * as S from "./styles";

export function GifComponent() {
     

  return (
    <S.Container>
      <S.Image>
        <LottieView autoPlay style={{ width: 450 }} source={gif} />
      </S.Image>
    </S.Container>
  );
}

export default GifComponent;
