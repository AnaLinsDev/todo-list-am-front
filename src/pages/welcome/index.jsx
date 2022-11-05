import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { GifComponent } from "../../components/GifComponent";

import * as S from "./styles";

export function Welcome() {
  const { navigate } = useNavigation();

  function goTo(local) {
    navigate(local);
  }

  return (
    <S.Container>
      <GifComponent />
      <S.Text>Welcome, Get started at your TO DO list</S.Text>
      <S.Footer style={{ marginTop: '20%' }} >
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
