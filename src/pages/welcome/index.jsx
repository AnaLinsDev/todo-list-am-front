import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import { Button } from "../../components/Button";

import gif from "./giphyWelcome.json";

import * as S from "./styles";

export function Welcome() {
  const { navigate } = useNavigation();

  function goTo(local) {
    navigate(local);
  }

  return (
    <S.Container>
      <S.Image>
        <LottieView autoPlay style={{ width: 500 }} source={gif} />
      </S.Image>
      <S.Footer>
        <Button
          title="Login"
          onPress={() => {
            goTo("Login");
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            goTo("Register");
          }}
        />
      </S.Footer>
    </S.Container>
  );
}

export default Welcome;
