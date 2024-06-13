import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { WorkstationCardProps } from "@/src/types/workstation";
import { WorkstationDetails } from "./WorkstationDetails";
import React, { useState } from "react";

export function WorkstationCard({ workstation }: WorkstationCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <Pressable
        className="bg-slate-100 dark:bg-gray-700 p-3 m-2 w-fit-content"
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      >
        <ThemedText className="text-center text-xl">
          {workstation.name}
        </ThemedText>
      </Pressable>
      {showDetails && <WorkstationDetails workstation={workstation} />}
    </>
  );
}
