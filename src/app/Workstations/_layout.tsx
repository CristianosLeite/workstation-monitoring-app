import { Tabs } from "expo-router";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { ThemedView } from "@/src/components/ThemedView";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const headerLayout = (props: BottomTabHeaderProps, title: string) => {
    return (
      <ThemedView className="flex-row min-w-full justify-between">
        <Pressable
          className="flex itemns-left m-4"
          onPress={() => props.navigation.navigate("(login)/index")}
        >
          <Icon name="arrow-back" size={24} color={colorScheme === "dark" ? "#ffffff" : "#000000"}/>
        </Pressable>
        <ThemedText className="m-4 text-left" type="subtitle">
          {title ?? "Estações de Trabalho"}
        </ThemedText>
        <Pressable
          className="flex items-center m-4"
          onPress={() => props.navigation.navigate("app-config")}
        >
          <Icon name="ellipsis-vertical-outline" size={24} color={colorScheme === "dark" ? "#ffffff" : "#000000"}/>
        </Pressable>
      </ThemedView>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          header(props) {
            return headerLayout(props, "Estações de trabalho");
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificações",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
            />
          ),
          header(props) {
            return headerLayout(props, "Notificações");
          },
        }}
      />
    </Tabs>
  );
}
