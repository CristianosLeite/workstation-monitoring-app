import React, { useState, useEffect } from "react";
import { Pressable, TextInput, Modal, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ServerFormProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ServerForm({ showForm, setShowForm }: ServerFormProps) {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const isVisible = showForm;

  const storeIp = async () => await AsyncStorage.setItem("ip", ip);
  const storePort = async () => await AsyncStorage.setItem("port", port);

  useEffect(() => {
    if (ip) storeIp();
    if (port) storePort();
  }, [ip, port]);

  const handleSubmit = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View className="flex-1 justify-end">
          <ThemedView className="bg-slate-100 shadow-lg blur-md dark:bg-gray-700 p-4 w-fit-content rounded-xl">
            <ThemedText className="text-center text-xl mb-4 dark:text-gray-50">
              Digite o IP e a porta do servidor
            </ThemedText>
            <TextInput
              className="mb-2 border-2 border-gray-300 rounded-lg h-12 p-1 dark:text-gray-50"
              placeholder="IP: ###.###.###.###"
              placeholderTextColor="#888"
              value={ip}
              onChangeText={setIp}
            />
            <TextInput
              className="mb-2 border-2 border-gray-300 rounded-lg h-12 p-1 dark:text-gray-50"
              placeholder="Port: ####"
              placeholderTextColor="#888"
              value={port}
              onChangeText={setPort}
            />
            <Pressable
              className="bg-green-500 dark:bg-green-900 p-3 m-3 w-fit-content rounded-full"
              onPress={handleSubmit}
            >
              <ThemedText className="text-center text-xl">Salvar</ThemedText>
            </Pressable>
          </ThemedView>
        </View>
      </Modal>
    );
  }

  return null;
}
