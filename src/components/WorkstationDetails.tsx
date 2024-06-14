import { Image } from "react-native";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { WorkstationCardProps } from "@/src/types/workstation";

export function WorkstationDetails({workstation}: WorkstationCardProps) {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/src/assets/images/adaptive-icon.png')}
        style={{ position: 'relative', height: 250, width: '100%' }}
      />
    }>
      <ThemedView>
        <ThemedView>
        <ThemedText className="m-4">
          {workstation.name}
        </ThemedText>
        <ThemedText className="m-4">
          Cadastrada em: &nbsp;
          {new Date(workstation.created_at).toLocaleDateString()}
        </ThemedText>
        </ThemedView>
        <ThemedText className="m-4">
          {workstation.description}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
