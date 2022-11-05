import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function App() {
  return (
    <NavigationContainer>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <AppRoutes />
      </IconComponentProvider>
    </NavigationContainer>
  );
}
