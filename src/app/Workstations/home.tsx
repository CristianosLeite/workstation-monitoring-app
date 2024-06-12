import { StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { WorkstationCard } from "@/src/components/WorkstationCard";
import { useWorkstations } from "@/src/hooks/apiWorkstations";

const workstationCards = useWorkstations().map((workstation) => (
  <WorkstationCard key={workstation.id} workstation={workstation} />
));

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView className="p-3 flex-1">
        <ThemedView style={styles.titleContainer}>
          <ThemedText className="m-4" type="title">
            Estações cadastradas
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
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

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
