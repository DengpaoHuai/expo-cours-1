import { Button, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useState } from "react";

export default function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    setIsAuthenticated(result.success);
  };

  return (
    <View>
      <Text>Login</Text>
      {isAuthenticated ? (
        <Text>Authenticated</Text>
      ) : (
        <Button title="Authenticate" onPress={authenticate} />
      )}
    </View>
  );
}
