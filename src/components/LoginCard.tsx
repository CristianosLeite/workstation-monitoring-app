import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import * as Notifications from "expo-notifications";
import { ServerForm } from "./ServerForm";
import { ThemedView } from "./ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNotification from "../hooks/appNotifications";

export function LoginCard() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const fetchIPAndPort = async () => {
      const ip = await AsyncStorage.getItem("ip");
      const port = await AsyncStorage.getItem("port");

      if (!ip || !port) {
        setShowForm(true);
        return;
      }

      setShowForm(false);

      const socket = new WebSocket(`ws://${ip}:${port}/notifications`);
      AppNotification(socket);

      return () => {
        socket.close();
      };
    };

    fetchIPAndPort();
  }, []);

  const handleSuccessLogin = () => {
    router.push("Workstations");
  };

  const handleLogin = async () => {
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: isEnrolled ? "Use a sua digital para continuar" : "Senha",
      biometricsSecurityLevel: "weak",
      disableDeviceFallback: false,
    });

    if (result.success) {
      router.push("Workstations");
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Você precisa permitir o envio de notificações para receber alertas de alarme!"
        );
      } else {
        console.log("Permissão de notificação concedida");
      }
    } else {
      alert("Não foi possível autenticar o dispositivo");
    }
  };

  return (
    <ThemedView className="bg-transparent">
      {showForm && <ServerForm showForm={showForm} setShowForm={setShowForm} />}
      {!showForm && (
        <Pressable
          style={{ width: 350, marginTop: 50 }}
          className="bg-cyan-950 p-3 bottom-0 rounded-full"
          onPress={handleLogin}
        >
          <Text className="text-white font-semibold text-center text-xl">
            Iniciar Aplicação
          </Text>
        </Pressable>
      )}
    </ThemedView>
  );
}
