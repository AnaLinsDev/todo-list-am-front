import React, { useState } from "react";
import { Stack, TextInput, Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

import { Button as ButtonComponent } from "../../components/Button";
import { GifComponent } from "../../components/GifComponent";
import api from "../../api";

import * as S from "./styles";

export function Login() {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goTo(local) {
    navigate(local);
  }

  async function loginUser() {

    const user = {
      email,
      password,
    };

    const response = await login(user);

    console.log(response);
  }

  function login(user) {
    api
      .post("/user/login", user)
      .then((resp) => {
        console.log(resp);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  return (
    <S.Container>
      <Stack spacing={2} style={{ margin: 16 }}>
        <GifComponent />

        <TextInput
          placeholder="Email"
          style={{ paddingBottom: 10 }}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Password"
          style={{ paddingBottom: 10 }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        <ButtonComponent
          title="Login"
          style={{ margin: 10 }}
          onPress={() => {
            loginUser();
          }}
        />
        <Button
          title="Back"
          color="black"
          style={{ margin: 10, padding: 20 }}
          variant="text"
          onPress={() => {
            goTo("Home");
          }}
        />
      </Stack>
    </S.Container>
  );
}

export default Login;
