import React from "react";
import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Workstation } from "@/src/types/workstation";

interface WorkstationCardProps {
  workstation: Workstation;
}

export function WorkstationCard({ workstation }: WorkstationCardProps) {
  const loadWorkstation = async () => {
    // Carregar detalhes da estação de trabalho
  };

  return (
    <Pressable
      className="bg-slate-100 dark:bg-blue-950 p-3 m-2 w-fit-content"
      onPress={loadWorkstation}
    >
      <ThemedText className="text-center text-xl">
        {workstation.name}
      </ThemedText>
    </Pressable>
  );
}
