import React, { useContext } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Pressable } from "react-native";
import { AcknowledgeContext } from "../hooks/acknowledgeContext";

export function AcknowledgeConfirmation() {
  const {
    showAcknowledgeConfirmation: showAcknowledgeConfirmation,
    setShowAcknowledgeConfirmation,
  } = useContext(AcknowledgeContext);
  return (
    <ThemedView>
      {showAcknowledgeConfirmation && (
        <ThemedView className="bg-slate-100 dark:bg-gray-700 p-2 w-fit-content rounded-xl shadow-md mt-3">
          <ThemedText className="text-center text-xl mb-2">
            Reconhecer alarme?
          </ThemedText>
          <ThemedText className="text-center text-md mb-2">
            A ação é irreversível.
          </ThemedText>
          <Pressable
            className="bg-cyan-600 p-3 m-3 mr-9 w-fit-content rounded-full"
            onPress={() => setShowAcknowledgeConfirmation(false)}
          >
            <ThemedText className="text-center text-xl">Sim</ThemedText>
          </Pressable>
          <Pressable
            className="bg-red-600 p-3 m-3 mr-9 w-fit-content rounded-full"
            onPress={() => setShowAcknowledgeConfirmation(false)}
          >
            <ThemedText className="text-center text-xl">Não</ThemedText>
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );
}
