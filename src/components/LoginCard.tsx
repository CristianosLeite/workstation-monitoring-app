import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as Notifications from 'expo-notifications';

export function LoginCard() {
  const handleLogin = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware && isEnrolled) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Use a sua digital para continuar",
      });

      if (result.success) {
        router.push("Workstations");

        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          alert("Você precisa permitir o envio de notificações para receber alertas de alarme!");
        }
      } else {
        console.log("Autenticação falhou!");
      }
    } else {
      console.log("Autenticação biométrica não disponível");
    }
  };

  return (
    <Pressable
      style={{ width: 350, marginTop: 50 }}
      className="bg-cyan-950 p-3 bottom-0 rounded-full"
      onPress={handleLogin}
    >
      <Text className="text-green-100 text-center text-xl">
        Iniciar Aplicação
      </Text>
    </Pressable>
  );
}
