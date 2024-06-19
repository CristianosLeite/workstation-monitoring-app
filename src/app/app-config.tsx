import { Stack, router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";

export default function AppConfig() {
    return (
        <>
        <Stack.Screen options={{ title: "Oops!" }} />
        <ThemedView style={styles.container}>
            <ThemedText type="title">This page is not working yet.</ThemedText>
            <Pressable
            onPress={router.back}
            style={({ pressed }) => [
                styles.link,
                {
                opacity: pressed ? 0.5 : 1,
                },
            ]}
            >
            <ThemedText>Go back!</ThemedText>
            </Pressable>
        </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});