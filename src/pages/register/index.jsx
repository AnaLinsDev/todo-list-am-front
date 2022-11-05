import React, { useState } from "react";
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import { Button as ButtonComponent } from "../../components/Button";
import { GifComponent } from "../../components/GifComponent";
import api from "../../api"

import * as S from "./styles";

export function Register() {
  const { navigate } = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goTo(local) {
    navigate(local);
  }

  async function registerUser() {
    const user = {
      name: username,
      email,
      password,
    };

    const response = await createUser(user)

    console.log(response);
  }

  function createUser(user) {
    api
      .post("/user", user)
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
          placeholder="UserName"
          style={{ paddingBottom: 10 }}
          onChangeText={(text) => setUsername(text)}
          leading={(props) => <Icon name="account" {...props} />}
        />

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
          title="Register"
          onPress={() => {
            registerUser();
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

export default Register;
