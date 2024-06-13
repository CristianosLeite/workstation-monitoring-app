import { Image } from "react-native";
import ParallaxScrollView from "./ParallaxScrollView";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Workstation } from "@/src/types/workstation";

export function WorkstationDetails(workstation: Workstation) {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    headerImage={
      <Image
        source={require('@/src/assets/images/adaptive-icon.png')}
      />
    }>
      <ThemedView>
        <ThemedText className="m-4">
          {workstation.name}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
