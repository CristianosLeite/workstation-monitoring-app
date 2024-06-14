import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { WorkstationCard } from "@/src/components/WorkstationCard";
import { useWorkstations } from "@/src/hooks/apiWorkstations";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [workstationCards, setWorkstationCards] = useState<React.ReactNode[]>(
    []
  );

  useEffect(() => {
    const fetchWorkstations = async () => {
      const workstations = useWorkstations();
      const cards = workstations.map((workstation) => (
        <WorkstationCard key={workstation.id} workstation={workstation} />
      ));
      setLoading(false);
      setWorkstationCards(cards);
    };

    fetchWorkstations();
  }, []);

  if (loading) {
    return <ThemedText>Carregando...</ThemedText>;
  }

  return (
    <ScrollView>
      <ThemedView className="p-3 flex-1">
        <ThemedView 
          className="flex-row justify-between items-center">
          <ThemedText className="m-4" type="title">
            Estações cadastradas
          </ThemedText>
        </ThemedView>
        <ThemedView className="gap-4 mb-4">
          <ThemedText className="m-4">
            Acesse as estações cadastradas para visualizar informações sobre
            cada uma delas.
          </ThemedText>
        </ThemedView>
        <ThemedView>{workstationCards}</ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
