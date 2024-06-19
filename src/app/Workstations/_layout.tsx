import { useState } from "react";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { Ionicons as Icon } from "@expo/vector-icons";
import { MenuModal } from "@/src/components/MenuModal";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(false);

  const headerLayout = (props: BottomTabHeaderProps, title: string) => {
    return (
      <ThemedView className="flex-row min-w-full justify-between">
        <Pressable
          className="flex itemns-left m-4"
          onPress={() => props.navigation.navigate("(login)/index")}
        >
          <Icon
            name="arrow-back"
            size={24}
            color={colorScheme === "dark" ? "#ffffff" : "#000000"}
          />
        </Pressable>
        <ThemedText className="m-4 text-left" type="subtitle">
          {title ?? "Estações de Trabalho"}
        </ThemedText>
        <Pressable
          className="flex items-center m-4"
          onPress={() => setShowModal(true)}
        >
          <Icon
            name="ellipsis-vertical-outline"
            size={24}
            color={colorScheme === "dark" ? "#ffffff" : "#000000"}
          />
        </Pressable>
        {showModal && (
          <MenuModal showMenu={showModal} setShowMenu={setShowModal} />
        )}
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
