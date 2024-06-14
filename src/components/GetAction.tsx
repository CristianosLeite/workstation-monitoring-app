import React, { useContext } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Pressable, TextInput } from "react-native";
import { AcknowledgeContext } from "../hooks/acknowledgeContext";

export function GetAction() {
  let textResponsible = "";
  let textAction = "";
  let {
    showDialog: showAlertDialog,
    responsible,
    action,
    setResponsible,
    setAction,
    setShowAcknowledgeConfirmation,
    setShowDialog: setShowAlertDialog,
    setIsAcknowledged,
  } = useContext(AcknowledgeContext);
  return (
    <ThemedView>
      {showAlertDialog && (
        <ThemedView className="bg-slate-100 dark:bg-gray-700 p-4 w-fit-content rounded-xl shadow-md mt-12">
          <ThemedText className="text-left text-xl mb-2">
            Responsável:
          </ThemedText>
          <TextInput
            className="mb-2 border-2 border-gray-300 rounded-lg h-12 p-1 dark:text-gray-50"
            onChangeText={(text) => {
              textResponsible = text;
            }}
          />
          <ThemedText className="text-left text-xl mb-2">
            Ação tomada:
          </ThemedText>
          <TextInput
            className="mb-2 border-2 border-gray-300 rounded-lg h-28 p-1 dark:text-gray-50"
            style={{ textAlignVertical: "top" }}
            multiline={true}
            onChangeText={(text) => {
              textAction = text;
            }}
          />
          <Pressable
            className="bg-cyan-600 p-3 m-3 w-fit-content rounded-full"
            onPress={() => {
              responsible = textResponsible;
              action = textAction;
              setResponsible(responsible);
              setAction(action);
              setShowAcknowledgeConfirmation(true);
              setShowAlertDialog(false);
            }}
          >
            <ThemedText className="text-center text-xl">Salvar</ThemedText>
          </Pressable>
          <Pressable
            className="bg-gray-500 p-3 m-3 w-fit-content rounded-full"
            onPress={() => {
              setResponsible("");
              setAction("");
              setShowAlertDialog(false);
              setIsAcknowledged(false);
            }}
          >
            <ThemedText className="text-center text-xl">Cancelar</ThemedText>
          </Pressable>
        </ThemedView>
      )}
    </ThemedView>
  );
}
