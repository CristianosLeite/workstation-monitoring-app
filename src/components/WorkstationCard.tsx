import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { Workstation } from "@/src/types/workstation";
import { Stack } from "expo-router";
import { WorkstationDetails } from "@/src/components/WorkstationDetails";
import { ThemedView } from "./ThemedView";

interface WorkstationCardProps {
  workstation: Workstation;
}

export function WorkstationCard({ workstation }: WorkstationCardProps) {
  const loadWorkstation = async () => {};

  return (
    <Pressable
      className="bg-slate-100 dark:bg-gray-700 p-3 m-2 w-fit-content"
      onPress={loadWorkstation}
    >
      <ThemedText className="text-center text-xl">
        {workstation.name}
      </ThemedText>
    </Pressable>
  );
}
